import { Router, Request, Response } from 'express';
import { sendEmail, generateConsultationConfirmationEmail } from '../services/email';
import { reservationStorage } from '../services/reservations';
import { createCalendarEvent, isTimeSlotAvailable } from '../services/calendar';

const router = Router();

interface BookingRequest {
  name: string;
  email: string;
  service: string;
  date: string;
  time: string;
  message?: string;
}

// Endpoint to check time slot availability
router.get('/api/booking/availability', async (req: Request, res: Response) => {
  try {
    const { date, time } = req.query;
    
    if (!date || !time) {
      return res.status(400).json({
        success: false,
        message: 'Date and time parameters are required'
      });
    }

    // First check our internal bookings
    const isBooked = reservationStorage.isTimeSlotBooked(date as string, time as string);
    
    if (isBooked) {
      return res.status(200).json({
        success: true,
        available: false,
        message: 'This time slot is already booked'
      });
    }
    
    // Then check Google Calendar if available
    const externallyAvailable = await isTimeSlotAvailable(date as string, time as string);
    
    return res.status(200).json({
      success: true,
      available: externallyAvailable,
      message: externallyAvailable ? 'Time slot is available' : 'This time slot conflicts with an existing appointment'
    });
  } catch (error) {
    console.error('Availability check error:', error);
    return res.status(500).json({
      success: false,
      message: 'An error occurred while checking availability'
    });
  }
});

// Endpoint to get all booked slots for a date
router.get('/api/booking/booked-slots', (req: Request, res: Response) => {
  try {
    const { date } = req.query;
    
    if (!date) {
      return res.status(400).json({
        success: false,
        message: 'Date parameter is required'
      });
    }
    
    const bookedTimeSlots = reservationStorage.getBookedTimeSlots(date as string);
    
    return res.status(200).json({
      success: true,
      bookedSlots: bookedTimeSlots
    });
  } catch (error) {
    console.error('Error fetching booked slots:', error);
    return res.status(500).json({
      success: false,
      message: 'An error occurred while fetching booked slots'
    });
  }
});

// Endpoint to handle consultation bookings
router.post('/api/booking', async (req: Request, res: Response) => {
  try {
    const bookingData = req.body as BookingRequest;
    
    // Validate required fields
    if (!bookingData.name || !bookingData.email || !bookingData.service || !bookingData.date || !bookingData.time) {
      return res.status(400).json({ 
        success: false, 
        message: 'Missing required booking information' 
      });
    }
    
    // Check if the time slot is already booked
    const isBooked = reservationStorage.isTimeSlotBooked(bookingData.date, bookingData.time);
    if (isBooked) {
      return res.status(409).json({
        success: false,
        message: 'This time slot is already booked. Please select another time.'
      });
    }
    
    // Also check against Google Calendar
    const isAvailable = await isTimeSlotAvailable(bookingData.date, bookingData.time);
    if (!isAvailable) {
      return res.status(409).json({
        success: false,
        message: 'This time slot conflicts with an existing appointment. Please select another time.'
      });
    }
    
    // Create Google Calendar event and get Meet link
    const meetingLink = await createCalendarEvent(
      bookingData.name,
      bookingData.email,
      bookingData.service,
      bookingData.date,
      bookingData.time,
      bookingData.message
    );
    
    // Store the reservation
    const reservation = reservationStorage.createReservation({
      name: bookingData.name,
      email: bookingData.email,
      service: bookingData.service,
      date: bookingData.date,
      time: bookingData.time,
      message: bookingData.message,
      meetingLink
    });
    
    // Generate email content
    const emailContent = generateConsultationConfirmationEmail(
      bookingData.name,
      bookingData.service,
      bookingData.date,
      bookingData.time,
      meetingLink
    );
    
    // Send confirmation email
    const emailSent = await sendEmail({
      to: bookingData.email,
      subject: 'Your Consultation with B&B Technology is Confirmed!',
      text: emailContent.text,
      html: emailContent.html
    });
    
    if (!emailSent) {
      console.warn('Failed to send confirmation email, but booking was recorded');
    }
    
    return res.status(200).json({
      success: true,
      message: 'Consultation booked successfully',
      emailSent,
      reservation: {
        id: reservation.id,
        date: reservation.date,
        time: reservation.time,
        meetingLink: reservation.meetingLink
      }
    });
  } catch (error) {
    console.error('Booking error:', error);
    return res.status(500).json({
      success: false,
      message: 'An error occurred while processing your booking'
    });
  }
});

export default router;