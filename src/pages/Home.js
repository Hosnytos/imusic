import React, { useEffect, useState } from "react";
import HorizontalList from "../components/HorizontalList";
import ListeningSection from "../components/ListeningSection";
import useStyles from "./Home.style";

function Home() {
  const classes = useStyles();
  const [famousTrack, setFamousTrack] = useState([]);

  async function fetchFamousTrack() {
    const response = await fetch(
      "https://theaudiodb.p.rapidapi.com/mostloved.php?format=track",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": `${process.env.REACT_APP_API_URL}`,
          "x-rapidapi-key": `${process.env.REACT_APP_API_KEY}`,
        },
      }
    )
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.error(err);
      });
    const famousTrack = await response.json();
    const tracks = famousTrack.loved;
    setFamousTrack(tracks);
  }

  useEffect(() => {
    fetchFamousTrack();
  }, []);

  return (
    <div className={classes.root}>
      <HorizontalList className={classes.list} data={famousTrack} />
      <ListeningSection />
    </div>
  );
}

export default Home;
