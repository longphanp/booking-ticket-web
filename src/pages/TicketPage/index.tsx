import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import SeatCard from "containers/SeatCard";
import useCreatePayment from "mutations/payments/useCreatePayment";
import queryClient from "queries";
import { GET_PAYMENTS } from "queries/payments/useGetPayments";
import useGetBookedSeats from "queries/seats/useGetBookedSeats";
import useGetSeats from "queries/seats/useGetSeats";
import useGetTicket from "queries/tickets/useGetTicket";
import pathname from "routes/pathname";

import { Button, Divider, Paper, Typography } from "@mui/material";

import useStyles from "./styles";

export default function TicketPage() {
  const { classes, cx } = useStyles();
  const params = useParams();
  const navigate = useNavigate();

  const [selectedSeats, setSelectedSeat] = useState<string[]>([]);

  const { data: ticket } = useGetTicket(params?.id!);
  const { data: seats } = useGetSeats(ticket?.area?._id!);
  const { data: bookedSeats } = useGetBookedSeats(ticket?.event?._id!);

  const createPayment = useCreatePayment();

  const bookedSeatMap = useMemo(
    () =>
      bookedSeats?.reduce(
        (m, seat: string) => ({ ...m, [seat]: true }),
        {} as Record<string, boolean>,
      ),
    [bookedSeats],
  );

  const handleAddSeat = (seatId: string) => {
    setSelectedSeat([...selectedSeats, seatId]);
  };

  const handleRemoveSeat = (seatId: string) => {
    setSelectedSeat(selectedSeats.filter(seat => seat !== seatId));
  };

  const handleCreateBooking = async () => {
    const payment = await createPayment.mutateAsync({
      event: ticket?.event?._id!,
      seats: selectedSeats,
    });

    await queryClient.invalidateQueries([GET_PAYMENTS]);
    navigate(`${pathname.payments}/${payment?._id}`);
  };

  return (
    <div className={classes.container}>
      <div className={classes.notationContainer}>
        <div className={classes.notation}>
          <Typography>Available seat</Typography>
          <Paper className={cx(classes.paper, classes.availablePaper)} />
        </div>
        <div className={classes.notation}>
          <Typography>Taken seat</Typography>
          <Paper className={cx(classes.paper, classes.disabledPaper)} />
        </div>
        <div className={classes.notation}>
          <Typography>Selected seat</Typography>
          <Paper className={cx(classes.paper, classes.selectedPaper)} />
        </div>
      </div>
      <Divider />
      <div className={classes.seatContainer}>
        {seats?.map(seat => {
          const isSelected = selectedSeats.includes(seat?._id!);
          const isUnavailable = bookedSeatMap?.[seat?._id!];

          return (
            <SeatCard
              key={seat._id}
              seat={seat}
              disabled={isUnavailable}
              selected={isSelected}
              onClick={isSelected ? handleRemoveSeat : handleAddSeat}
            />
          );
        })}
      </div>

      <Button
        variant="outlined"
        className={classes.createButton}
        onClick={handleCreateBooking}
      >
        Create a booking
      </Button>
    </div>
  );
}
