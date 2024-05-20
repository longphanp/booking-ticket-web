import { useQuery } from "react-query";

import { STALE_TIME } from "constants/api";
import getEvents from "services/events/getEvents";

export const GET_EVENTS = "events";

export default function useGetEvents() {
  return useQuery([GET_EVENTS], () => getEvents(), {
    staleTime: STALE_TIME.FIVE_MINS,
  });
}
