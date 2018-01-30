import React, {Component} from 'react';

export default class Counters extends Component {
  render() {
    return (
      <div id="moviesCountersContainer">
        <strong className="moviesCounter">Movies watched: </strong> {this.props.watched}
        <br/>
        <strong className="moviesCounter">Movies total: </strong> {this.props.total}
      </div>
    );
  }
}
