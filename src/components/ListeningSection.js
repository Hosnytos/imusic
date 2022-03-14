import React, { useEffect, useState } from "react";
import useStyles from "./ListeningSection.style";
import VerticalAlbum from "./VerticalAlbum";
import VerticalSong from "./VerticalSong";

function ListeningSection() {
  const classes = useStyles();
  const [famousAlbum, setFamousAlbum] = useState([]);
  const [trackByAlbum, setTrackByAlbum] = useState([]);
  const myId = getData();

  async function fetchFamousAlbum() {
    const response = await fetch(
      "https://theaudiodb.p.rapidapi.com/mostloved.php?format=album",
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
    const famousAlbums = await response.json();
    const albums = famousAlbums.loved;
    setFamousAlbum(albums);
  }

  async function fetchTrackByAlbum(myId) {
    const response = await fetch(
      "https://theaudiodb.p.rapidapi.com/track.php?m=" + myId + "%20",
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
    const data = await response.json();
    const tracks = data.track;
    setTrackByAlbum(tracks);
  }

  function getData() {
    let data = localStorage.getItem("myData");
    data = JSON.parse(data);
    var idAlbum;
    if (data != null) {
      idAlbum = data.idAlbum;
    }
    return idAlbum ? idAlbum : "2118223";
  }

  useEffect(() => {
    fetchFamousAlbum();
    fetchTrackByAlbum(myId);
  }, [myId]);

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
