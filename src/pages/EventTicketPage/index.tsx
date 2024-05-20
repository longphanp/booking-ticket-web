import { useParams } from "react-router-dom";

import TicketCard from "containers/TicketCard";
import useGetTickets from "queries/tickets/useGetTickets";

import useStyles from "./styles";

export default function EventTicketPage() {
  const { classes } = useStyles();
  const params = useParams();

  const { data: tickets } = useGetTickets(params.id!);

  return (
    <div className={classes.container}>
      {tickets?.map(ticket => <TicketCard key={ticket?._id} ticket={ticket} />)}
    </div>
  );
}
