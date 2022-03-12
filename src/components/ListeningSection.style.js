import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    backgroundColor: "#f5f5f5",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 30,
  },
  main: {
    display: "flex",
    alignItems: "flex-start",
  },
});

export default useStyles;
