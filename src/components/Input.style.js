import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    borderColor: "#f5f5f5",
    borderWidth: 0,
    fontWeight: 300,
    "&:focus": {
      outline: "none",
    },
    position: "relative",
    height: "45px",
    width: "400px",
    borderRadius: "10px",
    fontSize: "15px",
    paddingLeft: "20px",
  },
});

export default useStyles;
