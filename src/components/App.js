import React, {Component} from 'react';
import './App.css';
import AddMovie from './AddMovieForm';
import MovieList from './MovieList';
import Counters from './Counters';

class App extends Component {
    constructor(props) {
        super(props);
        let movies = require('../movies.json').map(m => {
            m.seen = m.seen === 'T';
            return m;
        });
        try {
            JSON.parse(localStorage.getItem('movies'));
        } catch(e) {}
        this.state = {movies: movies};
    }
    onAdd = (movie) => {
        movie.id = this.state.movies.length;
        this.setState({movies: [...this.state.movies, movie]});
        localStorage.setItem('movies', JSON.stringify(this.state.movies));
    };
    countSeen = () => {
        let count = 0;
        for (let movie of this.state.movies) {
            if (movie.seen)
                count += 1;
        }
        return count;
    };
    onSeen = (movie) => {
        let movieInState = null;
        for (let m of this.state.movies) {
            if (m.id === movie.id) {
                movieInState = m;
                break;
            }
        }
        if (movieInState) {
            movieInState.seen = true;
            localStorage.setItem('movies', JSON.stringify(this.state.movies));
            this.forceUpdate();
        }
    };
    render() {
        return (
            <div>
              <Counters seen={this.countSeen()} total={this.state.movies.length} />
              <MovieList movies={this.state.movies} onSeen={this.onSeen} />
              <hr/>
              <AddMovie onMovieAdd={this.onAdd} />
            </div>
        );
    }
}
export default App;
