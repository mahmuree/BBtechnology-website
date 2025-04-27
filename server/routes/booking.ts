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
  userTimezone: string;
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
    
    // Skip Google Calendar check due to authentication issues
    return res.status(200).json({
      success: true,
      available: true,
      message: 'Time slot is available'
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
    
    // Use Google Calendar API to create a real meeting with Google Meet
    console.log('Attempting to create calendar event with Google Meet...');
    
    try {
      // Create an event in Google Calendar including a Google Meet link
      console.log(`Creating calendar event for: ${bookingData.name}, Date: ${bookingData.date}, Time: ${bookingData.time}`);
      
      const meetingLink = await createCalendarEvent(
        bookingData.name,
        bookingData.email,
        bookingData.service,
        bookingData.date,
        bookingData.time,
        bookingData.userTimezone,
        bookingData.message
      );
      
      console.log('Calendar event and Google Meet link successfully created:', meetingLink);
      
      // Store the reservation with the real Google Meet link
      const reservation = reservationStorage.createReservation({
        name: bookingData.name,
        email: bookingData.email,
        service: bookingData.service,
        date: bookingData.date,
        time: bookingData.time,
        userTimezone: bookingData.userTimezone,
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
      
      // Send confirmation email to customer
      const emailSent = await sendEmail({
        to: bookingData.email,
        subject: 'Your Consultation with B&B Technology is Confirmed!',
        text: emailContent.text,
        html: emailContent.html
      });
      
      if (!emailSent) {
        console.warn('Failed to send confirmation email, but booking was recorded');
      }
      
      // Also send booking details to company email 
      await sendEmail({
        to: 'info@bbtechnology.io',
        subject: `New Consultation Booking: ${bookingData.service} with ${bookingData.name}`,
        text: `
New consultation booking details:
Name: ${bookingData.name}
Email: ${bookingData.email}
Service: ${bookingData.service}
Date: ${bookingData.date}
Time: ${bookingData.time}
Google Meet Link: ${meetingLink}
Message: ${bookingData.message || 'No message provided'}

This meeting has been automatically added to your Google Calendar.
`,
        html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
  <h2 style="color: #02124D;">New Consultation Booking</h2>
  <p>A new consultation has been booked through your website:</p>
  
  <div style="background-color: #f9f9f9; border-radius: 8px; padding: 20px; margin: 20px 0;">
    <p><strong>Name:</strong> ${bookingData.name}</p>
    <p><strong>Email:</strong> ${bookingData.email}</p>
    <p><strong>Service:</strong> ${bookingData.service}</p>
    <p><strong>Date:</strong> ${bookingData.date}</p>
    <p><strong>Time:</strong> ${bookingData.time}</p>
    <p><strong>Google Meet Link:</strong> <a href="${meetingLink}">${meetingLink}</a></p>
    <p><strong>Message:</strong> ${bookingData.message || 'No message provided'}</p>
  </div>
  
  <p>This meeting has been automatically added to your Google Calendar with the client invited.</p>
</div>
`
      });
      
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
      console.error('Failed to create calendar event:', error);
      return res.status(500).json({
        success: false,
        message: `Failed to book consultation: ${error.message || 'Calendar service unavailable'}`
      });
    }
    

  } catch (error) {
    console.error('Booking error:', error);
    return res.status(500).json({
      success: false,
      message: 'An error occurred while processing your booking'
    });
  }
});

export default router;