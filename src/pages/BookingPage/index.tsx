import BookingCard from "containers/BookingCard";
import useGetBookings from "queries/bookings/useGetBooking";

import useStyles from "./styles";

export default function BookingPage() {
  const { classes } = useStyles();
  const { data: bookings } = useGetBookings();

  return (
    <div className={classes.container}>
      {bookings?.map(booking => (
        <BookingCard key={booking?._id} booking={booking} />
      ))}
    </div>
  );
}
