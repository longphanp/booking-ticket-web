import axios from "axios";
import configs from "configs";
import Event from "types/Event";

export default async function getEvents(): Promise<Event[]> {
  const res = await axios.get(`${configs.endpoint.ticket}/v1/events`);

  return res?.data?.data;
}
