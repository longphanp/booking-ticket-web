import { useNavigate } from "react-router-dom";

import pathname from "routes/pathname";
import Ticket from "types/Ticket";
import formatCurrency from "utils/text/formatCurrency";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";

import useStyles from "./styles";

interface Props {
  ticket: Ticket;
}

export default function TicketCard(props: Props) {
  const { classes } = useStyles();
  const { ticket } = props;
  const navigate = useNavigate();

  return (
    <Card className={classes.card}>
      <CardHeader title={`Ticket for ${ticket.event.name}`}></CardHeader>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {`Area: ${ticket.area.name}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`Price: ${formatCurrency(ticket.price)}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => navigate(`${pathname.tickets}/${ticket._id}`)}
        >
          See available seats
        </Button>
      </CardActions>
    </Card>
  );
}
