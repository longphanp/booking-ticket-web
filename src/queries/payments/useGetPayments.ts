import { useQuery } from "react-query";

import { STALE_TIME } from "constants/api";
import getPayments from "services/payments/getPayments";

export const GET_PAYMENTS = "payments";

export default function useGetPayments() {
  return useQuery([GET_PAYMENTS], () => getPayments(), {
    staleTime: STALE_TIME.FIVE_MINS,
  });
}
