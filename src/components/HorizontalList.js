import { Link } from "react-router-dom";
import ArtistCard from "./ArtistCard";

import useStyles from "./HorizontalList.style";

function HorizontalList({ data }) {
  const classes = useStyles();

  return (
    <>
      <h2>Famous Artists</h2>
      <ul className={classes.root}>
        {data.map((entry) => (
          <li key={entry.id} className={classes.item}>
            <Link to={`/movies/${entry.id}`} className={classes.link}>
              <ArtistCard {...entry} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default HorizontalList;
