import React, {Fragment} from 'react';

const Song = (props) => {
  if(!props.song) return null;

  return (
    <Fragment>
      <a href={props.song.link[0].attributes.href}>
        <img src={props.song['im:image'][2].label} alt=""/>
      </a>
      <a href={props.song['im:artist'].attributes.href}><p>{props.song.title.label}</p></a>
      <p>Release: {props.song['im:releaseDate'].attributes.label}</p>
      <p>Price: {props.song['im:price'].label}</p>
      <audio controls>
        <source
          src={props.song.link[1].attributes.href}
          type={props.song.link[1].attributes.type}
          />
      </audio>
      <p>{props.song.rights.label}</p>
    </Fragment>
  )
}

export default Song;
