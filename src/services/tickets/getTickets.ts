import axios from "axios";
import configs from "configs";
import Ticket from "types/Ticket";

export default async function getTickets(eventId: string): Promise<Ticket[]> {
  const res = await axios.get(`${configs.endpoint.ticket}/v1/tickets`, {
    params: {
      eventId,
    },
  });

  return res?.data?.data;
}
