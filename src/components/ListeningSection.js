import React, { useEffect, useState } from "react";
import useStyles from "./ListeningSection.style";
import VerticalAlbum from "./VerticalAlbum";
import VerticalSong from "./VerticalSong";

function ListeningSection() {
  const classes = useStyles();
  const [famousAlbum, setFamousAlbum] = useState([]);
  const [trackByAlbum, setTrackByAlbum] = useState([]);

  async function fetchFamousAlbum() {
    const response = await fetch(
      "https://theaudiodb.p.rapidapi.com/mostloved.php?format=album",
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
    const data = await response.json();
    const albums = data.loved;
    setFamousAlbum(albums);
  }

  async function fetchTrackByAlbum() {
    const response = await fetch(
      "https://theaudiodb.p.rapidapi.com/track.php?m=2118223",
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
    const data = await response.json();
    const tracks = data.track;
    setTrackByAlbum(tracks);
  }

  useEffect(() => {
    fetchFamousAlbum();
    fetchTrackByAlbum();
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <VerticalAlbum data={famousAlbum} />
        <VerticalSong data={trackByAlbum} />
      </div>
    </div>
  );
}

export default ListeningSection;
