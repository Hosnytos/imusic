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
          "x-rapidapi-host": "theaudiodb.p.rapidapi.com",
          "x-rapidapi-key":
            "ca98d798bamshd0e88a8da3efd43p17a0b1jsn62feebbccdac",
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
