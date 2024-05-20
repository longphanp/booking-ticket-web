import { tss } from "tss-react/mui";

import { colors } from "@mui/material";

const useStyles = tss.create({
  card: {
    width: "320px",
  },

  cardContent: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
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
});

export default useStyles;
