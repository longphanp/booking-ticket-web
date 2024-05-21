import { useState } from "react";

import { EventPayload } from "types/Event";

import { Button, Divider, Modal, TextField, Typography } from "@mui/material";

import useStyles from "./styles";

interface Props {
  open: boolean;
  onConfirm: (event: EventPayload) => void;
  onCancel: () => void;
  payload?: EventPayload;
}

export default function EventFormModal(props: Props) {
  const {
    payload = {
      name: "",
      description: "",
      startAt: "",
      endAt: "",
    },
    open,
    onCancel,
    onConfirm,
  } = props;
  const { classes } = useStyles();
  const [event, setEvent] = useState(payload);

  const handleChangeEvent =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e?.target?.value;
      setEvent({ ...event, [field]: value });
    };

  return (
    <Modal className={classes.modal} open={open} onClose={onCancel}>
      <div className={classes.container}>
        <Typography>{!payload ? "Create event" : "Update event"}</Typography>
        <TextField
          label="Name"
          variant="outlined"
          className={classes.textField}
          value={event?.name}
          onChange={handleChangeEvent("name")}
        />
        <TextField
          label="Description"
          variant="outlined"
          className={classes.textField}
          value={event?.description}
          onChange={handleChangeEvent("description")}
        />
        <Divider />
        <Typography>Start At</Typography>
        <TextField
          variant="outlined"
          className={classes.textField}
          type="datetime-local"
          value={event?.startAt}
          onChange={handleChangeEvent("startAt")}
        />
        <Typography>End At</Typography>
        <TextField
          variant="outlined"
          className={classes.textField}
          type="datetime-local"
          value={event?.endAt}
          onChange={handleChangeEvent("endAt")}
        />

        <Button onClick={() => onConfirm(event!)}>Confirm</Button>
      </div>
    </Modal>
  );
}
