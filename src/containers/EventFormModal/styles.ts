import { tss } from "tss-react/mui";

const useStyles = tss.create({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  container: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    backgroundColor: "white",
    borderRadius: "4px",
    padding: "16px",
  },

  textField: {
    minWidth: "300px",
  },
});

export default useStyles;
