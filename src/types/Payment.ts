import Event from "./Event";
import Seat from "./Seat";

export const PAYMENT_STATUS = ["SUCCESS", "ERROR", "PENDING"] as const;

export default interface Payment {
  _id?: string;
  user?: string;
  event: Event;
  seats: Seat[];
  totals?: number;
  status?: (typeof PAYMENT_STATUS)[number];
  createdAt?: string;
  updatedAt?: string;
}
