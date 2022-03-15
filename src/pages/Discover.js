import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Rating from "../components/Rating";
import useStyles from "./Discover.style";

const OVERVIEW_SIZE = 340;

function Discover() {
  const [trackById, setTrackById] = useState([]);
  const noBackgroundImage =
    "https://i.ytimg.com/an/BqKmavyftEA-fJm8s_6TmA/featured_channel.jpg?v=61f939c2";
  const classes = useStyles();
  const [expand, setExpand] = useState(false);
  const toggle = () => setExpand(!expand);
  const { id } = useParams();

  async function fetchTrackById() {
    const response = await fetch(
      `https://theaudiodb.p.rapidapi.com/track.php?h=${id}`,
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
    const trackById = await response.json();
    const track = trackById.track;
    setTrackById(track);
  }

  useEffect(() => {
    fetchTrackById();
  }, []);

  function formatDuration(duration) {
    var ms = duration;
    var min = Math.floor((ms / 1000 / 60) << 0);
    var sec = Math.floor((ms / 1000) % 60);
    if (sec < 10) {
      sec = "0" + sec;
    }
    const songDuration = min + " : " + sec;
    return songDuration;
  }

  return (
    <div>
      {trackById.map((entry) => (
        <div className={classes.root}>
          <div className={classes.main}>
            <img
              src={
                entry.strTrackThumb ? entry.strTrackThumb : noBackgroundImage
              }
              alt={entry.strTrack}
              className={classes.poster}
            />
            <div>
              <h1 className={classes.title}>🎵 {entry.strTrack}</h1>
              <p>
                Artist :<span>{entry.strArtist}</span>
              </p>

              <p>
                Album :<span>{entry.strAlbum}</span>
              </p>

              <p>
                Duration :<span>{formatDuration(entry.intDuration)}</span>
              </p>
              <br></br>

              <div>
                <button className={classes.buttonYT}>Add to Fav</button>
                <a
                  href={
                    entry.strMusicVid
                      ? entry.strMusicVid
                      : "https://www.youtube.com/results?search_query=" +
                        entry.strArtist +
                        "+" +
                        entry.strTrack
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.buttonYT}
                >
                  Youtube Link
                </a>
              </div>
              <br></br>
              <Rating value={entry.intScore / 2} />
            </div>
          </div>
          <h2>Description</h2>
          <hr className={classes.hr} />
          <p>
            {entry.strDescriptionEN
              ? entry.strDescriptionEN
              : "No description available.".substring(
                  0,
                  expand
                    ? entry.strDescriptionEN
                      ? entry.strDescriptionEN
                      : "No description available.".length - 1
                    : OVERVIEW_SIZE
                )}
            {!expand && entry.strDescriptionEN
              ? entry.strDescriptionEN
              : "No description available.".length > OVERVIEW_SIZE
              ? "..."
              : ""}
            {!expand && (
              <>
                <br />
                <button onClick={toggle} className={classes.button}>
                  Lire plus
                </button>
              </>
            )}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Discover;
