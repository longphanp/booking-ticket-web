import { tss } from "tss-react/mui";

const useStyles = tss.create({
  container: {
    display: "flex",
    padding: "16px",
    flexWrap: "wrap",
    gap: "8px",
    overflow: "auto",
  },
});

export default useStyles;
