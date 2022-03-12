import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    height: 75,
    width: 75,
    borderRadius: 60,
    background: ({ imageURL }) => (imageURL ? `url(${imageURL})` : "grey"),
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 4,
  },
  artistName: {
    padding: 8,
    color: "#7F7F7F",
    fontSize: 12,
    flexGrow: 1,
  },
});

export default useStyles;
