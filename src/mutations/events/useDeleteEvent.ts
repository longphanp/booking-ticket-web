import { useMutation } from "react-query";

import deleteEvent from "services/events/deleteEvent";

export default function useDeleteEvent() {
  return useMutation(async (eventId: string) => deleteEvent(eventId));
}
