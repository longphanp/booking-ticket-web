import { tss } from "tss-react/mui";

import { colors } from "@mui/material";

const useStyles = tss.create({
  card: {
    width: "320px",
  },

  pendingText: {
    backgroundColor: colors.yellow[400],
    color: colors.grey[700],
    borderRadius: "4px",
    padding: "4px",
  },

  successText: {
    backgroundColor: colors.green[400],
    color: "white",
    borderRadius: "4px",
    padding: "4px",
  },

  cancelButton: {
    color: colors.red[400],
  },
});

export default useStyles;
