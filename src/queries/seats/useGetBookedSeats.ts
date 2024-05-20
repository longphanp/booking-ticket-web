import { useQuery } from "react-query";

import { STALE_TIME } from "constants/api";
import getBookedSeats from "services/seats/getBookedSeats";

export const GET_BOOKED_SEATS = "booked_seats";

export default function useGetBookedSeats(eventId: string) {
  return useQuery([GET_BOOKED_SEATS, eventId], () => getBookedSeats(eventId), {
    staleTime: STALE_TIME.FIVE_MINS,
  });
}
