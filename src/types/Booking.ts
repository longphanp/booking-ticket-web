import Seat from "./Seat";
import Ticket from "./Ticket";

export const BOOKING_STATUS = ["ACTIVE", "CANCELED"] as const;

export default interface Booking {
  _id?: string;
  user: string;
  seat: Seat;
  ticket: Ticket;
  status: (typeof BOOKING_STATUS)[number];
  createdAt?: string;
  updatedAt?: string;
}
