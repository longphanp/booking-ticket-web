import { useMutation } from "react-query";

import createEvent from "services/events/createEvent";
import { EventPayload } from "types/Event";

export default function useCreateEvent() {
  return useMutation(async (payload: EventPayload) => createEvent(payload));
}
