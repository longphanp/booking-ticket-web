import { useMutation } from "react-query";

import cancelBooking from "services/bookings/cancelBooking";

export default function useCancelBooking() {
  return useMutation(async (bookingId: string) => cancelBooking(bookingId));
}
