import axios from "axios";
import configs from "configs";
import { getTokens } from "localstorage/token";
import { EventPayload } from "types/Event";

export default async function createEvent(
  payload: EventPayload,
): Promise<Event> {
  const token = getTokens()?.accessToken;
  const res = await axios.post(
    `${configs.endpoint.ticket}/v1/events`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return res?.data?.data;
}
