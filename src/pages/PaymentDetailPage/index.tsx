import { useNavigate, useParams } from "react-router-dom";

import useConfirmPayment from "mutations/payments/useConfirmPayment";
import queryClient from "queries";
import useGetPayment from "queries/payments/useGetPayment";
import { GET_PAYMENTS } from "queries/payments/useGetPayments";
import pathname from "routes/pathname";
import formatCurrency from "utils/text/formatCurrency";

import { Button, Typography } from "@mui/material";

import useStyles from "./styles";

export default function PaymentDetail() {
  const { classes } = useStyles();
  const params = useParams();
  const navigate = useNavigate();

  const { data: payment } = useGetPayment(params?.id!);
  const confirmPayment = useConfirmPayment();

  const handleConfirmPayment = async () => {
    await confirmPayment.mutateAsync(payment?._id!);
    await queryClient.invalidateQueries([GET_PAYMENTS]);
    navigate(pathname.payments);
  };

  return (
    <div className={classes.container}>
      <div className={classes.paymentContainer}>
        <Typography>{`Payment id: ${payment?._id}`}</Typography>
        <Typography color="text.secondary">{`Event : ${payment?.event?.name}`}</Typography>
        {payment?.seats.map(seat => (
          <Typography color="text.secondary">{`Seat number: ${seat?.number} | Area: ${seat?.area?.name}`}</Typography>
        ))}
        <Typography>{`Price: ${formatCurrency(payment?.totals!)}`}</Typography>
        <Typography>{`Status: ${payment?.status}`}</Typography>
      </div>
      {payment?.status === "PENDING" && (
        <>
          <Typography color="error">This payment only valid in 60s</Typography>
          <Button
            variant="contained"
            className={classes.confirmButton}
            onClick={handleConfirmPayment}
          >
            Confirm Payment
          </Button>
        </>
      )}
    </div>
  );
}
