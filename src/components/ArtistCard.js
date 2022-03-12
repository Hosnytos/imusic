import React from "react";

import useStyles from "./ArtistCard.style";

function ArtistCard({ id, poster_path, title }) {
  const imageURL =
    poster_path && `https://image.tmdb.org/t/p/w92${poster_path}`;
  const classes = useStyles({ imageURL });

  return (
    <div>
      <div className={classes.root}></div>
      <h2 className={classes.artistName}>{title}</h2>
    </div>
  );
}

export default ArtistCard;
