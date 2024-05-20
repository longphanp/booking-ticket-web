import { useQuery } from "react-query";

import { STALE_TIME } from "constants/api";
import getTickets from "services/tickets/getTickets";

export const GET_TICKETS = "tickets";

export default function useGetTickets(eventId: string) {
  return useQuery([GET_TICKETS, eventId], () => getTickets(eventId), {
    staleTime: STALE_TIME.FIVE_MINS,
  });
}
