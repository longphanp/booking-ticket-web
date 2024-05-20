import axios from "axios";
import configs from "configs";
import { getTokens } from "localstorage/token";
import Booking from "types/Booking";

export default async function cancelBooking(
  bookingId: string,
): Promise<Booking[]> {
  const token = getTokens()?.accessToken;
  const res = await axios.post(
    `${configs.endpoint.ticket}/v1/bookings/${bookingId}/cancel`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return res?.data?.data;
}
