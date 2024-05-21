import { useState } from "react";
import { useNavigate } from "react-router-dom";

import EventFormModal from "containers/EventFormModal";
import { format } from "date-fns";
import useDeleteEvent from "mutations/events/useDeleteEvent";
import useUpdateEvent from "mutations/events/useUpdateEvent";
import queryClient from "queries";
import { GET_EVENTS } from "queries/events/useGetEvents";
import pathname from "routes/pathname";
import Event, { EventPayload } from "types/Event";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  colors,
} from "@mui/material";

import useStyles from "./styles";

interface Props {
  event: Event;
  action?: boolean;
  bookable?: boolean;
}

export default function EventCard(props: Props) {
  const { classes } = useStyles();
  const { event, action = false, bookable = true } = props;
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openModal, setOpenModal] = useState(false);

  const deleteEvent = useDeleteEvent();
  const updateEvent = useUpdateEvent();

  const handleOpenActionMenu = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseActionMenu = () => {
    setAnchorEl(null);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleDeleteEvent = async () => {
    await deleteEvent.mutateAsync(event?._id!);
    await queryClient.invalidateQueries([GET_EVENTS]);
  };

  const handleEditEvent = async (e: EventPayload) => {
    await updateEvent.mutateAsync({ ...e, eventId: event?._id! });
    await queryClient.invalidateQueries([GET_EVENTS]);
    handleCloseModal();
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        title={event.name}
        subheader={format(event.startAt, "MMMM dd, yyyy - HH:mm")}
        action={
          action ? (
            <IconButton onClick={handleOpenActionMenu}>
              <MoreVertIcon />
            </IconButton>
          ) : (
            <></>
          )
        }
      ></CardHeader>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {event?.description}
        </Typography>
      </CardContent>
      <CardActions>
        {bookable && (
          <Button
            size="small"
            onClick={() => navigate(`${pathname.events}/${event._id}`)}
          >
            Book
          </Button>
        )}
      </CardActions>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={!!anchorEl}
        onClose={handleCloseActionMenu}
      >
        <MenuItem onClick={handleOpenModal}>
          <Typography textAlign="center">Edit</Typography>
        </MenuItem>
        <MenuItem onClick={handleDeleteEvent}>
          <Typography textAlign="center" color={colors.red[400]}>
            Delete
          </Typography>
        </MenuItem>
      </Menu>
      <EventFormModal
        payload={{
          name: event?.name,
          description: event?.description,
          startAt: format(event?.startAt, "yyyy-MM-dd'T'hh:mm"),
          endAt: format(event?.endAt, "yyyy-MM-dd'T'hh:mm"),
        }}
        open={openModal}
        onCancel={handleCloseModal}
        onConfirm={handleEditEvent}
      />
    </Card>
  );
}
