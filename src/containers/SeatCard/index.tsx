import Seat from "types/Seat";

import { Button, Typography } from "@mui/material";

import useStyles from "./styles";

interface Props {
  seat: Seat;
  disabled?: boolean;
  selected: boolean;
  onClick: (seatId: string) => void;
}

export default function SeatCard(props: Props) {
  const { seat, disabled, selected, onClick } = props;
  const { classes, cx } = useStyles();

  return (
    <div className={classes.container}>
      <Button
        disabled={disabled}
        className={cx(classes.button, { [classes.selected]: selected })}
        onClick={() => {
          onClick(seat?._id!);
        }}
      />
      <Typography>{seat.number}</Typography>
    </div>
  );
}
