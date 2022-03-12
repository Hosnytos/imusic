import React from "react";

import useStyles from "./AlbumCard.style";

function AlbumCard({ id, poster_path, title }) {
  const imageURL =
    poster_path && `https://image.tmdb.org/t/p/w92${poster_path}`;
  const classes = useStyles({ imageURL });

  return (
    <div className={classes.root}>
      <h2 className={classes.albumName}>{title}</h2>
    </div>
  );
}

export default AlbumCard;
