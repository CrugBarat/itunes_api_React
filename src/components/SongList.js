import React, {Fragment} from 'react';
import Song from './Song';

const SongList = (props) => {
  const song = props.songs.map((song, index) => {
    return <Song song={song} key={index}/>
  });

  return(
    <Fragment>
      {song}
    </Fragment>
  )
}

export default SongList;
