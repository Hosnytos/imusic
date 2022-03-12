import React from "react";
import HorizontalList from "../components/HorizontalList";
import ListeningSection from "../components/ListeningSection";
import data from "../data.json";
import useStyles from "./Home.style";

function Home() {
  const classes = useStyles();

  const movie = data.movies.filter(() => true);

  return (
    <div className={classes.root}>
      <HorizontalList className={classes.list} data={movie} />
      <ListeningSection />
    </div>
  );
}

export default Home;
