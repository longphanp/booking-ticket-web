import { useMutation } from "react-query";

import confirmPayment from "services/payments/confirmPayment";

export default function useConfirmPayment() {
  return useMutation(async (paymentId: string) => confirmPayment(paymentId));
}
