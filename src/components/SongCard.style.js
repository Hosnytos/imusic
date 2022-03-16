import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  containerSong: {
    backgroundColor: "white",
    width: "50vw",
    height: "90px",
    display: "flex",
    flexDirection: "row",
    color: "black",
    fontSize: "16px",
    borderRadius: "10px",
    flexWrap: "nowrap",
    alignContent: "space-between",
    justifyContent: "space-around",
    alignItems: "center",
  },
  profileLogo: {
    width: "45px",
    height: "45px",
    borderRadius: "50%",
  },
  artistName: {
    color: "#7f7f7f",
    fontSize: "12px",
  },
  songName: {
    color: "black",
    fontSize: "20px",
    fontWeight: "bold",
  },
  songWave: {
    fontSize: "50px",
  },
  playButton: {
    fontSize: "40px",
    color: "#147aff",
  },
  favoriteIcon: {
    opacity: 0.3,
    color: "#ff1493",
    fontSize: "45px",
  },
  added: {
    opacity: 1,
  },
});

export default useStyles;
