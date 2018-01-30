import React, {Component} from 'react';


export default class Movie extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.title} ({this.props.year})</h3>
        <strong>Genre:</strong> {this.props.genre}
        <br/>

        {this.props.seen
          ? (<span>Already Watched</span>)
          : (<button onClick={() => this.props.onSeen()}>I watched this</button>)}

        <p>{this.props.summary}</p>
      </div>
    );
  }
}