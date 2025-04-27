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
  // Verify we have all required environment variables
  if (!GOOGLE_CLIENT_ID) {
    throw new Error('GOOGLE_CLIENT_ID environment variable is missing');
  }
  if (!GOOGLE_CLIENT_SECRET) {
    throw new Error('GOOGLE_CLIENT_SECRET environment variable is missing');
  }
  if (!GOOGLE_REDIRECT_URI) {
    throw new Error('GOOGLE_REDIRECT_URI environment variable is missing');
  }
  if (!GOOGLE_REFRESH_TOKEN) {
    throw new Error('GOOGLE_REFRESH_TOKEN environment variable is missing');
  }
  
  // Log that we're initializing the OAuth2 client (without exposing secrets)
  console.log('Initializing Google OAuth2 client with provided credentials');
  
  // Create an OAuth2 client using the environment variables
  const oAuth2Client = new google.auth.OAuth2(
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    GOOGLE_REDIRECT_URI
  );

  // Set credentials using refresh token
  oAuth2Client.setCredentials({
    refresh_token: GOOGLE_REFRESH_TOKEN
  });
  
  console.log('Google OAuth2 client successfully initialized');

  return oAuth2Client;
}

/**
 * Converts date and time strings to a JavaScript Date object
 * Explicitly handles the time zone to prevent conversion issues
 * 
 * @param date - Date string in "Month day, year" format (e.g., "April 15, 2023")
 * @param time - Time string in "h:mm a" format (e.g., "3:30 PM")
 * @returns Date object
 */
/**
 * Parse the date and time strings from the user input and create a correct date object.
 * This function carefully preserves the exact time specified by the user without any timezone adjustments.
 */
function parseDateTime(date: string, time: string): Date {
  console.log(`Creating calendar event for: ${date}, Time: ${time}`);
  
  // Parse date components
  const [month, day, year] = date.match(/(\w+)\s+(\d+),\s+(\d+)/)?.slice(1) || ['', '', ''];
  
  // Parse time components
  const [timeStr, ampm] = time.split(' ');
  const [hourStr, minuteStr] = timeStr.split(':');
  
  const hour = parseInt(hourStr, 10);
  const minute = parseInt(minuteStr, 10);
  const isPM = ampm?.toLowerCase() === 'pm';
  
  // Convert from 12-hour to 24-hour format
  let hour24 = hour;
  if (isPM && hour !== 12) {
    hour24 = hour + 12;
  } else if (!isPM && hour === 12) {
    hour24 = 0;
  }
  
  // Convert month name to month index (0-11)
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                     'July', 'August', 'September', 'October', 'November', 'December'];
  const monthIndex = monthNames.findIndex(m => m.toLowerCase() === month.toLowerCase());
  
  // Create a date object that exactly represents the user's selected date and time
  // We use the Date constructor with explicit components to avoid timezone issues
  // This creates a date object in the local timezone of the server
  const dateObj = new Date(
    parseInt(year, 10),
    monthIndex,
    parseInt(day, 10),
    hour24,
    minute,
    0,
    0
  );
  
  // Log detailed information for debugging
  console.log(`Time conversion check (improved):
  - Input date/time: "${date} ${time}"
  - Parsed components: year=${year}, month=${month}(${monthIndex}), day=${day}
  - Time components: hour=${hour}, minute=${minute}, ampm=${ampm}, hour24=${hour24}
  - Created date object (ISO): ${dateObj.toISOString()}
  - Local representation: ${format(dateObj, 'MMMM d, yyyy h:mm a')}
  - Current system time zone: ${Intl.DateTimeFormat().resolvedOptions().timeZone}
  `);
  
  return dateObj;
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
  userTimezone: string,
  message?: string
): Promise<string> {
  try {
    // If Google credentials aren't set, fail with clear error
    if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET || !GOOGLE_REDIRECT_URI || !GOOGLE_REFRESH_TOKEN) {
      console.error('Cannot create calendar event: Missing Google credentials');
      throw new Error('Google Calendar credentials are not properly configured');
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

    // Add user's message if provided
    if (message) {
      description += `\nCLIENT'S MESSAGE:\n${message}`;
    }
    
    // Always include the timezone information for debugging/troubleshooting
    description += `\n\nUSER TIMEZONE: ${userTimezone}`;
    
    // Hazırlık notlarını kaldırdık

    // Create event with Google Meet integration
    const event: calendar_v3.Schema$Event = {
      summary: `${service} Consultation with ${name}`,
      location: 'Google Meet',
      description,
      start: {
        dateTime: startTime.toISOString(),
        timeZone: userTimezone, // Kullanıcının kendi saat dilimi
      },
      end: {
        dateTime: endTime.toISOString(),
        timeZone: userTimezone, // Kullanıcının kendi saat dilimi
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

    // Verify that we have a Google Meet link
    if (!response.data.hangoutLink) {
      throw new Error('Google Calendar event created but no Google Meet link was generated.');
    }
    
    console.log('Successfully created Google Meet link:', response.data.hangoutLink);
    
    // Store the event ID for future reference
    console.log('Event created with ID:', response.data.id);
    
    // Return the legitimate Google Meet link
    return response.data.hangoutLink;
  } catch (error) {
    console.error('Error creating calendar event:', error);
    
    // For better error handling, log specific error types
    if (error.response) {
      if (error.response.status === 401) {
        console.warn('Google Calendar authentication failed. Credentials may be invalid or expired.');
        throw new Error('Google Calendar authentication failed. Please check your API credentials.');
      } else if (error.response.status === 403) {
        console.warn('Google Calendar permission denied. Check scopes and permissions.');
        throw new Error('Google Calendar permission denied. Please check API permissions.');
      } else {
        console.warn(`Google Calendar API error: ${error.response.status}`);
        throw new Error(`Google Calendar API error: ${error.response.status}`);
      }
    }
    
    throw new Error('Failed to create Google Calendar event and Google Meet link.');
  }
}