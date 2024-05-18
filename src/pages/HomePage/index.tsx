import { Typography } from "@mui/material";

import useStyles from "./styles";

export default function HomePage() {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <Typography>home</Typography>
    </div>
  );
}
