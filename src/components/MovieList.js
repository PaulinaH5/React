import React, {Component} from 'react';
import Movie from './Movie';

export default class MovieList extends Component {
  render() {
    return (
      <div id="moviesListContainer">
        <h2 >Movies</h2>
        <ul id="moviesList">
          {this.props.movies.map(m => (
            <li><Movie {...m} onSeen={() => this.props.onSeen(m)} /></li>
          ))}
        </ul>
      </div>
    );
  }
}
