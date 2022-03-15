import React from "react";
import "./SongCard.css";
import * as GiIcons from "react-icons/gi";
import * as RiIcons from "react-icons/ri";

function SongCard({ strTrack, strArtist, intDuration, strTrackThumb }) {
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

  return (
    <div className="container-song">
      <img
        src={strTrackThumb ? strTrackThumb : noBackgroundImage}
        alt="album"
        className="profile-logo"
      ></img>
      <div>
        <div className="artist-name">{artistName}</div>
        <div className="song-name">{songName}</div>
      </div>
      <div className="songWave">
        <GiIcons.GiSoundWaves />
      </div>
      {formatDuration(intDuration)}
      <div className="playButton">
        <RiIcons.RiPlayCircleFill />
      </div>
    </div>
  );
}

export default SongCard;
