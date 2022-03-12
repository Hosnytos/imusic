import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    backgroundColor: "#f5f5f5",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: 255,
    paddingRight: 30,
    paddingTop: 25,
  },
  list: {
    marginTop: 32,
  },
  error: { padding: 8, color: "red" },
});

export default useStyles;
