import EventCard from "containers/EventCard";
import useGetEvents from "queries/events/useGetEvents";

import useStyles from "./styles";

export default function HomePage() {
  const { classes } = useStyles();

  const { data: events } = useGetEvents();

  return (
    <div className={classes.container}>
      {events?.map(event => <EventCard key={event._id} event={event} />)}
    </div>
  );
}
