import { google } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';

// Set up Google Calendar API client
const credentials = {
  clientId: process.env.GOOGLE_CLIENT_ID || '',
  clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
  redirectUri: process.env.GOOGLE_REDIRECT_URI || '',
  refreshToken: process.env.GOOGLE_REFRESH_TOKEN || '',
};

/**
 * Creates an authenticated OAuth2 client for Google APIs
 */
function getOAuth2Client(): OAuth2Client {
  const oAuth2Client = new google.auth.OAuth2(
    credentials.clientId,
    credentials.clientSecret,
    credentials.redirectUri
  );

  oAuth2Client.setCredentials({
    refresh_token: credentials.refreshToken
  });

  return oAuth2Client;
}

/**
 * Checks if a time slot is available
 * @param date - Date of the appointment
 * @param time - Time of the appointment (e.g., "2:00 PM")
 * @returns Promise<boolean> - True if the slot is available
 */
export async function isTimeSlotAvailable(date: string, time: string): Promise<boolean> {
  try {
    if (!credentials.refreshToken) {
      console.warn('Google Calendar credentials not set. Skipping availability check.');
      return true; // Skip check if credentials are not set
    }

    const auth = getOAuth2Client();
    const calendar = google.calendar({ version: 'v3', auth });

    // Parse the date and time
    const [hours, minutes] = time.match(/(\d+):(\d+)/)?.slice(1).map(Number) || [0, 0];
    const isPM = time.toLowerCase().includes('pm');
    let hour24 = hours;
    
    // Convert to 24-hour format
    if (isPM && hours < 12) {
      hour24 += 12;
    } else if (!isPM && hours === 12) {
      hour24 = 0;
    }

    // Create Date objects for start and end times (30-minute slot)
    const startDate = new Date(date);
    startDate.setHours(hour24, minutes, 0, 0);
    
    const endDate = new Date(startDate);
    endDate.setMinutes(endDate.getMinutes() + 30);

    // Format dates as ISO strings
    const timeMin = startDate.toISOString();
    const timeMax = endDate.toISOString();

    // Check for events in this time period
    const response = await calendar.events.list({
      calendarId: 'primary',
      timeMin,
      timeMax,
      maxResults: 10,
      singleEvents: true,
      orderBy: 'startTime',
    });

    const events = response.data.items || [];
    return events.length === 0; // Available if no events found
  } catch (error) {
    console.error('Error checking time slot availability:', error);
    return true; // Assume available on error to prevent blocking bookings
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
    if (!credentials.refreshToken) {
      console.warn('Google Calendar credentials not set. Skipping event creation.');
      return 'https://meet.google.com/placeholder-link';
    }

    const auth = getOAuth2Client();
    const calendar = google.calendar({ version: 'v3', auth });

    // Parse the date and time
    const [hours, minutes] = time.match(/(\d+):(\d+)/)?.slice(1).map(Number) || [0, 0];
    const isPM = time.toLowerCase().includes('pm');
    let hour24 = hours;
    
    // Convert to 24-hour format
    if (isPM && hours < 12) {
      hour24 += 12;
    } else if (!isPM && hours === 12) {
      hour24 = 0;
    }

    // Create Date objects for start and end times (30-minute slot)
    const startDate = new Date(date);
    startDate.setHours(hour24, minutes, 0, 0);
    
    const endDate = new Date(startDate);
    endDate.setMinutes(endDate.getMinutes() + 30);

    // Create event details
    const eventDescription = `
Consultation with ${name}
Service: ${service}
${message ? `\nClient message: ${message}` : ''}
    `;

    // Create the calendar event
    const event = {
      summary: `B&B Technology - ${service} Consultation with ${name}`,
      description: eventDescription,
      start: {
        dateTime: startDate.toISOString(),
        timeZone: 'UTC',
      },
      end: {
        dateTime: endDate.toISOString(),
        timeZone: 'UTC',
      },
      attendees: [
        { email: email, displayName: name },
        { email: 'info@bbtechnology.io' }
      ],
      conferenceData: {
        createRequest: {
          requestId: `${Date.now()}-${Math.random().toString(36).substring(2, 11)}`,
          conferenceSolutionKey: { type: 'hangoutsMeet' }
        }
      }
    };

    const response = await calendar.events.insert({
      calendarId: 'primary',
      requestBody: event,
      conferenceDataVersion: 1
    });

    // Extract and return the Google Meet link
    const meetLink = response.data.conferenceData?.entryPoints?.find(
      (entryPoint: any) => entryPoint.entryPointType === 'video'
    )?.uri || 'https://meet.google.com/placeholder-link';

    return meetLink;
  } catch (error) {
    console.error('Error creating calendar event:', error);
    return 'https://meet.google.com/placeholder-link';
  }
}