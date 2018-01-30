import React, {Component} from 'react';

export default class AddMovieForm extends Component {
    state = {
        title: "",
        year: "",
        genre: "",
        summary: "",
        viewed: false
    };
    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    onCheck = (e) => {
        this.setState({watched: e.target.checked});
    };
    onSubmit = (e) => {
        e.preventDefault();
        const {title, year, genre, summary} = this.state;
        this.props.onMovieAdd({title, year, genre, summary});
        this.setState({
            title: "",
            year: "",
            genre: "",
            summary: "",
            seen: false
        })
    };
    render() {
        return (
            <div id="formContainer">
              <h2>Add movie
              </h2>
              <div className="content">
                <form>
                  <label>Title:
                  </label>
                  <input type="text"
                         name="title"
                         onChange={e => this.change(e)}
                         value={this.state.title}
                  />
                  <br/>
                  <label>Year:
                  </label>
                  <input type="text"
                         name="year"
                         onChange={e => this.change(e)}
                         value={this.state.year}
                  />
                  <br/>
                  <label>Genre:
                  </label>
                  <input type="text"
                         name="genre"
                         onChange={e => this.change(e)}
                         value={this.state.genre}
                  />
                  <br/>
                  <label>Summary:
                  </label>
                  <input type="text"
                         name="summary"
                         onChange={e => this.change(e)}
                         value={this.state.summary}
                  />
                  <br/>
                  <label>
                    <input type="checkbox" checked={this.state.seen} onChange={(e) => this.onCheck(e)} />
                    Watched
                  </label>
                  <br/>
                  <button onClick={e => this.onSubmit(e)}>Add
                  </button>
                </form>
              </div>
            </div>
        );
    }
}
