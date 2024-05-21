import { useMutation } from "react-query";

import updateEvent from "services/events/updateEvent";
import { EventPayload } from "types/Event";

export default function useCreateEvent() {
  return useMutation(async (payload: EventPayload & { eventId: string }) =>
    updateEvent(payload.eventId, payload),
  );
}
