import React from "react";
import useStyles from "./VerticalSong.style";
import { Link } from "react-router-dom";
import SongCard from "./SongCard";

function VerticalSong({ data }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ul>
        {data.map((entry) => (
          <li key={entry.id} className={classes.item}>
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
