import React from "react";
import useStyles from "./ListeningSection.style";
import VerticalAlbum from "./VerticalAlbum";

import data from "../data.json";
import VerticalSong from "./VerticalSong";

function ListeningSection() {
  const classes = useStyles();

  const movie = data.movies.filter(() => true);

  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <VerticalAlbum data={movie} />
        <VerticalSong data={movie} />
      </div>
    </div>
  );
}

export default ListeningSection;
