import axios from "axios";
import configs from "configs";
import { getTokens } from "localstorage/token";
import Booking from "types/Booking";

export default async function getBookings(): Promise<Booking[]> {
  const token = getTokens()?.accessToken;
  const res = await axios.get(`${configs.endpoint.ticket}/v1/bookings`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res?.data?.data;
}
