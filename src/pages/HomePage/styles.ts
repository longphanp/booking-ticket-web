import { tss } from "tss-react/mui";

const useStyles = tss.create({
  container: {
    display: "flex",
    flexWrap: "wrap",
    padding: "16px",
    overflow: "auto",
    gap: "8px",
  },
});

export default useStyles;
