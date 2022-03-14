import React from "react";
import useStyles from "./VerticalSong.style";
import { Link } from "react-router-dom";
import SongCard from "./SongCard";

function VerticalSong({ data }) {
  const classes = useStyles();
  function getAlbumName() {
    let data = localStorage.getItem("myData");
    data = JSON.parse(data);
    var title;
    if (data != null) {
      title = data.strArtist + " - " + data.strAlbum;
    }
    return title ? title : "Michael Jackson - Thriller";
  }

  return (
    <div className={classes.root}>
      <h2>{getAlbumName()}</h2>
      <ul>
        {data.map((entry) => (
          <li key={entry.idTrack} className={classes.item}>
            <Link to={"#"} className={classes.link}>
              <SongCard {...entry} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VerticalSong;
