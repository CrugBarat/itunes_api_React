import React, {Component, Fragment} from 'react';

class SongContainer extends Component {
  constructor(props) {
    super(props);

    this.state ={
      songs: [],
    }
  }

  componentDidMount() {
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
    .then(res => res.json())
    .then(data => this.setState({songs: data.feed.entry}))
    .catch(err => console.err);
  }

  render(){
    return(
      <Fragment>
      </Fragment>
    )
  }
}

export default SongContainer;
