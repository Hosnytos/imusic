import { createUseStyles } from "react-jss";

const noBackgroundImage =
  "https://w7.pngwing.com/pngs/637/983/png-transparent-best-music-vinyl-record-illustration-dynamic-vinyl-record-other-album-label.png";

const useStyles = createUseStyles({
  root: {
    height: 75,
    width: 75,
    borderRadius: 60,
    backgroundImage: ({ imageURL }) =>
      imageURL ? `url(${imageURL})` : `url(${noBackgroundImage})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
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
