import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    height: 250,
    width: "18vw",
    borderRadius: 10,
    backgroundImage: ({ imageURL }) => (imageURL ? `url(${imageURL})` : "grey"),
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 4,
    bottom: 0,
    marginTop: 3,
    position: "relative",
  },
  albumName: {
    position: "absolute",
    bottom: 20,
    left: 10,
    backgroundColor: "white",
    padding: 8,
    color: "black",
    borderRadius: 50,
    height: 32,
    fontSize: 14,
  },
});

export default useStyles;
