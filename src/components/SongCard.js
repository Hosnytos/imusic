import React from "react";
import * as GiIcons from "react-icons/gi";
import * as RiIcons from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./SongCard.style";
import classNames from "classnames";
import { favoritesSlice } from "../Slices";

function SongCard({
  strTrack,
  strArtist,
  intDuration,
  strTrackThumb,
  strMusicVid,
  idTrack,
}) {
  const classes = useStyles();
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  const noBackgroundImage =
    "https://i.ytimg.com/an/BqKmavyftEA-fJm8s_6TmA/featured_channel.jpg?v=61f939c2";
  const songName = strTrack;
  const artistName = strArtist;
  function formatDuration(duration) {
    var ms = duration;
    var min = Math.floor((ms / 1000 / 60) << 0);
    var sec = Math.floor((ms / 1000) % 60);
    if (sec < 10) {
      sec = "0" + sec;
    }
    const songDuration = min + " : " + sec;
    return songDuration;
  }
  const playMusicVideo = (event) => {
    event.preventDefault();
    const url = strMusicVid
      ? strMusicVid
      : "https://www.youtube.com/results?search_query=" +
        strArtist +
        "+" +
        strTrack;
    window.open(url, "_blank");
  };
  const addToFavorite = (event) => {
    event.preventDefault();
    dispatch(favoritesSlice.actions.toggle({ idTrack }));
  };

  return (
    <div className={classes.containerSong}>
      <img
        src={strTrackThumb ? strTrackThumb : noBackgroundImage}
        alt="album"
        className={classes.profileLogo}
      ></img>
      <div>
        <div className={classes.artistName}>{artistName}</div>
        <div className={classes.songName}>{songName}</div>
      </div>
      <div className={classes.songWave}>
        <GiIcons.GiSoundWaves />
      </div>
      {formatDuration(intDuration)}
      <div onClick={playMusicVideo} className={classes.playButton}>
        <RiIcons.RiPlayCircleFill />
      </div>
      <div
        onClick={addToFavorite}
        className={classNames(classes.favoriteIcon, {
          [classes.added]: favorites.includes(idTrack),
        })}
      >
        <RiIcons.RiHeartAddFill />
      </div>
    </div>
  );
}

export default SongCard;
