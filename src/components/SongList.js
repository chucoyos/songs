import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {
  render() {console.log(this.props)
    return (
    <div>
      <h1>Song List</h1>
      <ul>
        {this.props.songs.map(song =>
          <li 
            className="ui divided list" 
            key={song.title}>{song.title}
            <button
              onClick={() => this.props.selectSong(song)}   
              className="ui button primary">
                Select
              </button>
          </li>
        )}
      </ul>
    </div>
  )}
}

const mapStateToProps = state => {
  return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong })(SongList);