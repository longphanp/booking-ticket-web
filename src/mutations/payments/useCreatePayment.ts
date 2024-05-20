import { useMutation } from "react-query";

import createPayment from "services/payments/createPayment";

export default function useCreatePayment() {
  return useMutation(async (payload: { event: string; seats: string[] }) =>
    createPayment(payload),
  );
}
