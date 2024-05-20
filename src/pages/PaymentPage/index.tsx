import PaymentCard from "containers/PaymentCard";
import useGetPayments from "queries/payments/useGetPayments";

import useStyles from "./styles";

export default function PaymentPage() {
  const { classes } = useStyles();
  const { data: payments } = useGetPayments();

  return (
    <div className={classes.container}>
      {payments?.map(payment => (
        <PaymentCard key={payment?._id} payment={payment} />
      ))}
    </div>
  );
}
