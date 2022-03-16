import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    backgroundColor: "#f5f5f5",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: 275,
    paddingRight: 150,
    paddingTop: 25,
    marginBottom: 50,
  },
  main: {
    marginTop: 10,
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 50,
  },
  poster: {
    height: 300,
    width: 275,
    marginRight: 50,
    borderRadius: 5,
  },
  title: {
    marginBottom: 10,
  },
  bold: {
    fontWeight: "bold",
  },
  buttonYT: {
    border: "none",
    padding: "4px 8px",
    backgroundColor: "red",
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    borderRadius: 10,
  },
  hr: {
    width: "75%",
    height: 2,
    backgroundColor: "black",
    marginBottom: 30,
    marginTop: 8,
  },
});

export default useStyles;
