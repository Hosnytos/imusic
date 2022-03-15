import { Link } from "react-router-dom";
import PopularTracksCard from "./PopularTracksCard";

import useStyles from "./HorizontalList.style";

function HorizontalList({ data }) {
  const classes = useStyles();

  return (
    <>
      <h2>Popular Tracks</h2>
      <ul className={classes.root}>
        {data.map((entry) => (
          <li key={entry.idTrack} className={classes.item}>
            <Link to={`/discover/${entry.idTrack}`} className={classes.link}>
              <PopularTracksCard {...entry} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default HorizontalList;
