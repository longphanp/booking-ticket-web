import { tss } from "tss-react/mui";

const useStyles = tss.create({
  navigation: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    gap: "8px",
  },

  navigateButton: {
    color: "white",
    textTransform: "none",
  },

  profileButton: {
    flexShrink: 0,
    textTransform: "none",
  },
});

export default useStyles;
