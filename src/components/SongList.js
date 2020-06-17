import React, {Fragment} from 'react';
import Song from './Song';

const SongList = (props) => {
  const song = props.songs.map((song, index) => {
    return <Song song={song} key={index}/>
  });

  return(
    <Fragment>
      <h1>Top Songs</h1>
      {song}
    </Fragment>
  )
}

export default SongList;
