import React from "react";
import useStyles from "./VerticalAlbum.style";
import { Link } from "react-router-dom";
import AlbumCard from "./AlbumCard";

function VerticalAlbum({ data }) {
  const classes = useStyles();
  function setData(idAlbum, strArtist, strAlbum) {
    let obj = {
      idAlbum: `${idAlbum}`,
      strArtist: `${strArtist}`,
      strAlbum: `${strAlbum}`,
    };
    localStorage.setItem("myData", JSON.stringify(obj));
    window.scrollTo(0, 0);
  }

  return (
    <div className={classes.root}>
      <h2>Popular Albums</h2>
      <ul>
        {data.map((entry) => (
          <li key={entry.idAlbum} className={classes.item}>
            <Link
              to={"#"}
              onClick={() =>
                setData(entry.idAlbum, entry.strArtist, entry.strAlbum)
              }
              className={classes.link}
            >
              <AlbumCard {...entry} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VerticalAlbum;
