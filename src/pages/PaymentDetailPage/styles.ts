import { tss } from "tss-react/mui";

const useStyles = tss.create({
  container: {
    display: "flex",
    flexDirection: "column",
    padding: "16px",
    flexWrap: "wrap",
    gap: "8px",
  },

  paymentContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },

  confirmButton: {
    maxWidth: "300px",
  },
});

export default useStyles;
