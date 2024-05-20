import axios from "axios";
import configs from "configs";
import { getTokens } from "localstorage/token";
import Payment from "types/Payment";

export default async function confirmPayment(
  paymentId: string,
): Promise<Payment> {
  const token = getTokens()?.accessToken;
  const res = await axios.post(
    `${configs.endpoint.ticket}/v1/payments/confirm`,
    { payment: paymentId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return res?.data?.data;
}
