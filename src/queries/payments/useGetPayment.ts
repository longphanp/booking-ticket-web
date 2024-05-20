import { useQuery } from "react-query";

import { STALE_TIME } from "constants/api";
import getPayment from "services/payments/getPayment";

export const GET_PAYMENT = "payment";

export default function useGetPayment(paymentId: string) {
  return useQuery([GET_PAYMENT, paymentId], () => getPayment(paymentId), {
    staleTime: STALE_TIME.FIVE_MINS,
  });
}
