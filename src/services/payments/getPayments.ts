import axios from "axios";
import configs from "configs";
import { getTokens } from "localstorage/token";
import Payment from "types/Payment";

export default async function getPayments(): Promise<Payment[]> {
  const token = getTokens()?.accessToken;
  const res = await axios.get(`${configs.endpoint.ticket}/v1/payments`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res?.data?.data;
}
