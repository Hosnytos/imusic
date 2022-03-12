import React from "react";
import "./SongCard.css";
import * as GiIcons from "react-icons/gi";
import * as GrIcons from "react-icons/gr";

function SongCard() {
  return (
    <div className="container-song">
      <img
        src="https://img.uefa.com/imgml/TP/players/3/2020/324x324/63706.jpg"
        alt="album"
        className="profile-logo"
      ></img>
      <div>
        <div>ALBULM</div>
        <div>Artist</div>
      </div>
      <div className="songWave">
        <GiIcons.GiSoundWaves />
      </div>
      3:24
      <div className="playButton">
        <GrIcons.GrCirclePlay />
      </div>
    </div>
  );
}

export default SongCard;
