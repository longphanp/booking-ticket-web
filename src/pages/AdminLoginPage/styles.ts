import { tss } from "tss-react/mui";

const useStyles = tss.create({
  page: {
    display: "flex",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    padding: "16px",
  },

  cardAction: {
    display: "flex",
    justifyContent: "center",
  },
});

export default useStyles;
