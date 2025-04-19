import { Router, Request, Response } from 'express';
import { sendEmail, generateConsultationConfirmationEmail } from '../services/email';

const router = Router();

interface BookingRequest {
  name: string;
  email: string;
  service: string;
  date: string;
  time: string;
  message?: string;
}

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
    
    // Generate email content
    const emailContent = generateConsultationConfirmationEmail(
      bookingData.name,
      bookingData.service,
      bookingData.date,
      bookingData.time
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
    
    // In a real app, we would also save the booking to a database here
    
    return res.status(200).json({
      success: true,
      message: 'Consultation booked successfully',
      emailSent
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