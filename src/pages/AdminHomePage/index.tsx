import { useState } from "react";

import EventCard from "containers/EventCard";
import EventFormModal from "containers/EventFormModal";
import useCreateEvent from "mutations/events/useCreateEvent";
import queryClient from "queries";
import useGetEvents, { GET_EVENTS } from "queries/events/useGetEvents";
import { EventPayload } from "types/Event";

import { Button } from "@mui/material";

import useStyles from "./styles";

export default function AdminHomePage() {
  const { classes } = useStyles();

  const [openModal, setOpenModal] = useState(false);
  const { data: events } = useGetEvents();

  const createEvent = useCreateEvent();

  const handleCreateEvent = async (event: EventPayload) => {
    await createEvent.mutateAsync(event);
    await queryClient.invalidateQueries([GET_EVENTS]);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div className={classes.container}>
      <Button
        onClick={handleOpenModal}
        className={classes.createButton}
        variant="outlined"
      >
        Create event
      </Button>
      <div className={classes.eventContainer}>
        {events?.map(event => (
          <EventCard
            key={event?._id}
            event={event}
            action={true}
            bookable={false}
          />
        ))}
      </div>
      <EventFormModal
        open={openModal}
        onCancel={handleCloseModal}
        onConfirm={handleCreateEvent}
      />
    </div>
  );
}
