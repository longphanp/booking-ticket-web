import useCancelBooking from "mutations/bookings/useCancelBooking";
import queryClient from "queries";
import { GET_BOOKINGS } from "queries/bookings/useGetBooking";
import Booking from "types/Booking";
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
  booking: Booking;
}

export default function BookingCard(props: Props) {
  const { classes, cx } = useStyles();
  const { booking } = props;
  const cancelBooking = useCancelBooking();

  const handleCancelBooking = async () => {
    await cancelBooking.mutateAsync(booking?._id!);
    await queryClient.invalidateQueries([GET_BOOKINGS]);
  };

  return (
    <Card className={cx(classes.card)}>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {`Payment id: ${booking?._id}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`Event: ${booking?.ticket?.event?.name}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`Area: ${booking?.ticket?.area?.name}`}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {`Seats: ${booking?.seat?.number}`}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {`Status: ${booking?.status}`}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {`Price: ${formatCurrency(booking?.ticket?.price)}`}
        </Typography>
      </CardContent>
      <CardActions>
        {booking?.ticket?.cancellable && booking?.status === "ACTIVE" && (
          <Button
            className={classes.cancelButton}
            onClick={handleCancelBooking}
          >
            Cancel booking
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
