import React, {Fragment} from 'react';

const Song = (props) => {
  if(!props.song) return null;

  return (
    <Fragment>
      <div className="song-container">
        <div className="caption-style">
          <img className="song-image" src={props.song['im:image'][2].label} alt=""/>
          <div className="caption">
            <div className="blur"></div>
              <div className="caption-text">
                <p className="song-title">{props.song['im:name'].label}</p>
                <a href={props.song['im:artist'].attributes.href}>
                  <p>{props.song['im:artist'].label}</p>
                </a>
                <p>Release: {props.song['im:releaseDate'].attributes.label}</p>
                <a href={props.song.link[0].attributes.href}>
                  <p>Price: {props.song['im:price'].label}</p>
                </a>
                <audio controls>
                  <source
                    src={props.song.link[1].attributes.href}
                    type={props.song.link[1].attributes.type}
                    />
                </audio>
              </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Song;
