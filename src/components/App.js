import React, {Component} from 'react';
import './App.css';
import AddMovie from './AddMovieForm';
import MovieList from './MovieList';
import Counters from './Counters';

class App extends Component {
    constructor(props) {
        super(props);
        let movies = [];
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
    countWatched = () => {
        let count = 0;
        for (let movie of this.state.movies) {
            if (movie.watched)
                count += 1;
        }
        return count;
    };
    onWatched = (movie) => {
        this.state.movies[movie.id].watched = true;
        localStorage.setItem('movies', JSON.stringify(this.state.movies));
        this.forceUpdate();
    };
    render() {
        return (
            <div>
              <Counters watched={this.countWatched()} total={this.state.movies.length} />
              <MovieList movies={this.state.movies} onWatched={this.onWatched} />
              <hr/>
              <AddMovie onMovieAdd={this.onAdd} />
            </div>
        );
    }
}
export default App;
