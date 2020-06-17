import React, {Component, Fragment} from 'react';
import SongList from '../components/SongList';
import apple from '../apple.png'

class SongContainer extends Component {
  constructor(props) {
    super(props);

    this.state ={
      songs: [],
    }
  }

  componentDidMount() {
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=78/json")
    .then(res => res.json())
    .then(data => this.setState({songs: data.feed.entry}))
    .catch(err => console.err);
  }

  render(){
    return(
      <Fragment>
        <header>
          <div className="logo-title-container">
            <img className="apple-logo" src={apple} alt=""/>
            <p className="title">Music</p>
          </div>
          <hr/>
        </header>
        <main>
          <SongList songs={this.state.songs}/>
        </main>
      </Fragment>
    )
  }
}

export default SongContainer;
