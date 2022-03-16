import useStyles from "./ListeningSection.style";
import VerticalAlbum from "./VerticalAlbum";
import VerticalSong from "./VerticalSong";

function ListeningSection({ famousAlbum, trackByAlbum }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <VerticalAlbum data={famousAlbum} />
        <VerticalSong className={classes.list} data={trackByAlbum} />
      </div>
    </div>
  );
}

export default ListeningSection;
