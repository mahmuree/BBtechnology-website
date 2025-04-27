import { google, calendar_v3 } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';
import { parse, addHours, format } from 'date-fns';

// Load environment variables
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const GOOGLE_REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI;
const GOOGLE_REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN;

if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET || !GOOGLE_REDIRECT_URI || !GOOGLE_REFRESH_TOKEN) {
  console.warn('Google Calendar credentials are not properly set up. Calendar integration will be limited.');
}

/**
 * Creates an authenticated OAuth2 client for Google APIs
 */
function getOAuth2Client(): OAuth2Client {
  const oAuth2Client = new google.auth.OAuth2(
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    GOOGLE_REDIRECT_URI
  );

  // Set credentials using refresh token
  oAuth2Client.setCredentials({
    refresh_token: GOOGLE_REFRESH_TOKEN
  });

  return oAuth2Client;
}

/**
 * Converts date and time strings to a JavaScript Date object
 * @param date - Date string in "Month day, year" format (e.g., "April 15, 2023")
 * @param time - Time string in "h:mm a" format (e.g., "3:30 PM")
 * @returns Date object
 */
function parseDateTime(date: string, time: string): Date {
  const combinedDateTimeStr = `${date} ${time}`;
  return parse(combinedDateTimeStr, 'MMMM d, yyyy h:mm a', new Date());
}

/**
 * Checks if a time slot is available
 * @param date - Date of the appointment
 * @param time - Time of the appointment (e.g., "2:00 PM")
 * @returns Promise<boolean> - True if the slot is available
 */
export async function isTimeSlotAvailable(date: string, time: string): Promise<boolean> {
  try {
    // If Google credentials aren't set, assume available
    if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET || !GOOGLE_REDIRECT_URI || !GOOGLE_REFRESH_TOKEN) {
      console.warn('Cannot check calendar availability: Missing Google credentials');
      return true;
    }

    const auth = getOAuth2Client();
    const calendar = google.calendar({ version: 'v3', auth });

    // Parse the date and time to create start and end times
    const startTime = parseDateTime(date, time);
    // Each consultation is 30 minutes
    const endTime = addHours(startTime, 0.5);

    // Check for conflicting events
    const response = await calendar.events.list({
      calendarId: 'primary',
      timeMin: startTime.toISOString(),
      timeMax: endTime.toISOString(),
      singleEvents: true
    });

    // If there are any events during this time, the slot is not available
    const events = response.data.items || [];
    return events.length === 0;
  } catch (error) {
    console.error('Error checking calendar availability:', error);
    
    // For better error handling, log specific error types
    if (error.response && error.response.status === 401) {
      console.warn('Google Calendar authentication failed. Credentials may be invalid or expired.');
    }
    
    // In case of auth error, we'll say it's available and let the booking go through
    // The worst case is a double-booking which can be manually resolved
    return true;
  }
}

/**
 * Creates a calendar event with Google Meet link
 * @param name - Client's name
 * @param email - Client's email
 * @param service - Service type
 * @param date - Date of the appointment
 * @param time - Time of the appointment
 * @param message - Optional message from client
 * @returns Promise<string> - The Google Meet link
 */
export async function createCalendarEvent(
  name: string,
  email: string,
  service: string,
  date: string,
  time: string,
  message?: string
): Promise<string> {
  try {
    // If Google credentials aren't set, return a placeholder
    if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET || !GOOGLE_REDIRECT_URI || !GOOGLE_REFRESH_TOKEN) {
      console.warn('Cannot create calendar event: Missing Google credentials');
      return "https://meet.google.com/placeholder-link";
    }

    const auth = getOAuth2Client();
    const calendar = google.calendar({ version: 'v3', auth });

    // Parse the date and time to create start and end times
    const startTime = parseDateTime(date, time);
    // Each consultation is 30 minutes
    const endTime = addHours(startTime, 0.5);

    // Format the description with the client's message if provided
    let description = `
B&B TECHNOLOGY CONSULTATION
----------------------------
SERVICE TYPE: ${service}
CLIENT: ${name}
EMAIL: ${email}
DATE: ${date}
TIME: ${time}
DURATION: 30 minutes

This is an automatically generated event from the B&B Technology booking system.
`;

    if (message) {
      description += `\nCLIENT'S MESSAGE:\n${message}`;
    }
    
    description += `\n\nPREPARATION NOTES:
- Review client information before the call
- Prepare relevant service materials and pricing details
- Log into Google Meet 5 minutes before the scheduled time`;

    // Create event with Google Meet integration
    const event: calendar_v3.Schema$Event = {
      summary: `${service} Consultation with ${name}`,
      location: 'Google Meet',
      description,
      start: {
        dateTime: startTime.toISOString(),
        timeZone: 'UTC',
      },
      end: {
        dateTime: endTime.toISOString(),
        timeZone: 'UTC',
      },
      attendees: [
        { email: email, displayName: name },
        { email: 'info@bbtechnology.io' }
      ],
      // Add detailed event metadata
      extendedProperties: {
        private: {
          clientName: name,
          clientEmail: email,
          serviceType: service,
          scheduledDate: date,
          scheduledTime: time,
          clientMessage: message || 'No additional message provided'
        }
      },
      // Automatically add Google Meet conference data
      conferenceData: {
        createRequest: {
          requestId: `bbtechnology-${Date.now()}`,
          conferenceSolutionKey: { type: 'hangoutsMeet' }
        }
      }
    };

    const response = await calendar.events.insert({
      calendarId: 'primary',
      requestBody: event,
      conferenceDataVersion: 1, // Enable Google Meet integration
    });

    // Return the Google Meet link if available, or a fallback
    const meetLink = response.data.hangoutLink || "https://meet.google.com/new";
    return meetLink;
  } catch (error) {
    console.error('Error creating calendar event:', error);
    
    // For better error handling, log specific error types
    if (error.response && error.response.status === 401) {
      console.warn('Google Calendar authentication failed when creating event. Credentials may be invalid or expired.');
    }
    
    // In case of error, return link to create a new meeting
    return "https://meet.google.com/new";
  }
}