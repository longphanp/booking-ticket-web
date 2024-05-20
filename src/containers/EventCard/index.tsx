import { useNavigate } from "react-router-dom";

import { format } from "date-fns";
import pathname from "routes/pathname";
import Event from "types/Event";

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
  event: Event;
}

export default function EventCard(props: Props) {
  const { classes } = useStyles();
  const { event } = props;
  const navigate = useNavigate();

  return (
    <Card className={classes.card}>
      <CardHeader
        title={event.name}
        subheader={format(event.startAt, "MMMM dd, yyyy - HH:mm")}
      ></CardHeader>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {event?.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => navigate(`${pathname.events}/${event._id}`)}
        >
          Book
        </Button>
      </CardActions>
    </Card>
  );
}
