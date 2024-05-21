import axios from "axios";
import configs from "configs";
import { getTokens } from "localstorage/token";

export default async function deleteEvent(eventId: string): Promise<Event> {
  const token = getTokens()?.accessToken;
  const res = await axios.delete(
    `${configs.endpoint.ticket}/v1/events/${eventId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return res?.data?.data;
}
