import { tss } from "tss-react/mui";

import { colors } from "@mui/material";

const useStyles = tss.create({
  container: {
    display: "flex",
    flexDirection: "column",
    padding: "16px",
    gap: "16px",
  },

  notationContainer: {
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
  },

  notation: {
    display: "flex",
    gap: "8px",
    alignItems: "center",
  },

  seatContainer: {
    display: "flex",
    padding: "16px",
    overflow: "auto",
    flexWrap: "wrap",
    gap: "8px",
  },

  paper: {
    width: "48px",
    height: "48px",
  },

  disabledPaper: {
    backgroundColor: colors.grey[400],
  },

  selectedPaper: {
    backgroundColor: colors.red[400],
  },

  availablePaper: {
    backgroundColor: colors.green[400],
  },

  createButton: {
    maxWidth: "200px",
  },
});

export default useStyles;
