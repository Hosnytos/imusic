import React from "react";

import useStyles from "./AlbumCard.style";

function AlbumCard({ idAlbum, strAlbumThumb, strAlbum }) {
  const imageURL = strAlbumThumb;
  const classes = useStyles({ imageURL });

  return (
    <div className={classes.root}>
      <h2 className={classes.albumName}>{strAlbum}</h2>
    </div>
  );
}

export default AlbumCard;
