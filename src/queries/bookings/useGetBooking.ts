import { useQuery } from "react-query";

import { STALE_TIME } from "constants/api";
import getBookings from "services/bookings/getBookings";

export const GET_BOOKINGS = "bookings";

export default function useGetBookings() {
  return useQuery([GET_BOOKINGS], () => getBookings(), {
    staleTime: STALE_TIME.FIVE_MINS,
  });
}
