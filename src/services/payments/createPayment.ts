import axios from "axios";
import configs from "configs";
import { getTokens } from "localstorage/token";
import Payment from "types/Payment";

export default async function createPayment(payload: {
  event: string;
  seats: string[];
}): Promise<Payment> {
  const token = getTokens()?.accessToken;
  const res = await axios.post(
    `${configs.endpoint.ticket}/v1/payments`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return res?.data?.data;
}
