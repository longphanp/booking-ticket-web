import { useNavigate } from "react-router-dom";

import pathname from "routes/pathname";
import Payment from "types/Payment";
import formatCurrency from "utils/text/formatCurrency";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

import useStyles from "./styles";

interface Props {
  payment: Payment;
}

export default function PaymentCard(props: Props) {
  const { classes, cx } = useStyles();
  const { payment } = props;
  const navigate = useNavigate();

  return (
    <Card className={cx(classes.card)}>
      <CardContent className={classes.cardContent}>
        <Typography variant="body2" color="text.secondary">
          {`Payment id: ${payment?._id}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`Event: ${payment?.event?.name}`}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {`Seats: ${payment?.seats?.map(seat => `${seat?.number}-${seat?.area?.name}`)}`}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {`Price: ${formatCurrency(payment?.totals!)}`}
        </Typography>

        <Typography variant="body2">
          Status:{" "}
          <span
            className={cx({
              [classes.pendingText]: payment?.status === "PENDING",
              [classes.successText]: payment?.status === "SUCCESS",
            })}
          >
            {payment?.status}
          </span>
        </Typography>
      </CardContent>
      <CardActions>
        {payment?.status === "PENDING" && (
          <Button
            onClick={() => navigate(`${pathname.payments}/${payment?._id}`)}
          >
            Confirm payment
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
