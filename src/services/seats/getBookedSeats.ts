import axios from "axios";
import configs from "configs";

export default async function getBookedSeats(
  eventId: string,
): Promise<string[]> {
  const res = await axios.get(`${configs.endpoint.ticket}/v1/seats/booked`, {
    params: {
      eventId,
    },
  });

  return res?.data?.data;
}
