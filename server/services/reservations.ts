// In-memory storage for bookings
// In a production app, this would be stored in a database

interface Reservation {
  id: string;
  name: string;
  email: string;
  service: string;
  date: string;
  time: string;
  message?: string;
  meetingLink: string;
  createdAt: Date;
}

class ReservationStorage {
  private reservations: Map<string, Reservation>;

  constructor() {
    this.reservations = new Map();
  }

  /**
   * Creates a new reservation
   */
  createReservation(reservation: Omit<Reservation, 'id' | 'createdAt'>): Reservation {
    const id = `${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;
    const newReservation: Reservation = {
      ...reservation,
      id,
      createdAt: new Date()
    };

    this.reservations.set(id, newReservation);
    return newReservation;
  }

  /**
   * Gets all reservations
   */
  getAllReservations(): Reservation[] {
    return Array.from(this.reservations.values());
  }

  /**
   * Gets a reservation by ID
   */
  getReservationById(id: string): Reservation | undefined {
    return this.reservations.get(id);
  }

  /**
   * Checks if a time slot is already booked
   */
  isTimeSlotBooked(date: string, time: string): boolean {
    // Check all reservations to see if the date and time are already booked
    const reservations = Array.from(this.reservations.values());
    return reservations.some(reservation => 
      reservation.date === date && reservation.time === time
    );
  }

  /**
   * Gets all booked time slots for a specific date
   */
  getBookedTimeSlots(date: string): string[] {
    const reservations = Array.from(this.reservations.values());
    return reservations
      .filter(reservation => reservation.date === date)
      .map(reservation => reservation.time);
  }
}

// Export singleton instance
export const reservationStorage = new ReservationStorage();