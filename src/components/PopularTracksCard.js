import React from "react";

import useStyles from "./PopularTracksCard.style";

function PopularTracksCard({ idTrack, strTrackThumb, strTrack }) {
  const imageURL = strTrackThumb;
  const classes = useStyles({ imageURL });

  return (
    <div>
      <div className={classes.root}></div>
      <h2 className={classes.artistName}>{strTrack}</h2>
    </div>
  );
}

export default PopularTracksCard;
