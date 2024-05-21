import { tss } from "tss-react/mui";

const useStyles = tss.create({
  container: {
    display: "flex",
    flexDirection: "column",
    padding: "16px",
    gap: "8px",
  },

  eventContainer: {
    display: "flex",
    flexWrap: "wrap",
    padding: "16px",
    overflow: "auto",
    gap: "8px",
  },

  createButton: {
    maxWidth: "200px",
  },
});

export default useStyles;
