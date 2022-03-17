import React, { useEffect, useState } from "react";
import HorizontalList from "../components/HorizontalList";
import ListeningSection from "../components/ListeningSection";
import useStyles from "./Home.style";
import { popularAlbumsSlice, popularTracksSlice } from "../Slices";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [trackByAlbum, setTrackByAlbum] = useState([]);
  const myId = getData();

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
    dispatch(popularTracksSlice.actions.add({ loved: tracks }));
  }
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
    dispatch(popularAlbumsSlice.actions.add({ loved: albums }));
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
    fetchTrackByAlbum(myId);
  }, [myId]);
  useEffect(() => {
    fetchFamousTrack();
    fetchFamousAlbum();
  });

  const popularTracks = useSelector((state) => state.popularTracks);
  const popularAlbums = useSelector((state) => state.popularAlbums);

  return (
    <div className={classes.root}>
      <HorizontalList className={classes.list} data={popularTracks} />
      <ListeningSection
        famousAlbum={popularAlbums}
        trackByAlbum={trackByAlbum}
      />
    </div>
  );
}

export default Home;
