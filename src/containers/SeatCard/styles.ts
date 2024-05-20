/* eslint-disable @typescript-eslint/naming-convention */
import { tss } from "tss-react/mui";

import { colors } from "@mui/material";

const useStyles = tss.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  button: {
    width: "48px",
    height: "48px",
    minWidth: 0,
    backgroundColor: colors.green[300],
    "&.Mui-disabled": {
      backgroundColor: colors.grey[400],
    },

    "&:hover": {
      backgroundColor: colors.green[200],
      opacity: "0.5",
    },
  },

  selected: {
    backgroundColor: colors.red[400],
    "&:hover": {
      backgroundColor: colors.red[200],
      opacity: "0.5",
    },
  },
});

export default useStyles;
