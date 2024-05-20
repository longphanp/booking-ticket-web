import { useQuery } from "react-query";

import { STALE_TIME } from "constants/api";
import getTicket from "services/tickets/getTicket";

export const GET_TICKETS = "tickets";

export default function useGetTicket(ticketId: string) {
  return useQuery([GET_TICKETS, ticketId], () => getTicket(ticketId), {
    staleTime: STALE_TIME.FIVE_MINS,
  });
}
