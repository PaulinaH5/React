import React, {Component} from 'react';


export default class Counters extends Component {
  render() {
    return (
      <div>
        <strong>Movies watched: </strong> {this.props.seen}
        <br/>
        <strong>Movies total: </strong> {this.props.total}
      </div>
    );
  }
}