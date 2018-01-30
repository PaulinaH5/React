export class MoviesStorage {
  constructor(data) {
    let movies_key = "movies";
    let movies_value = localStorage.getItem(movies_key);

    if (null === movies_value
      || false === Array.isArray(JSON.parse(movies_value))) {
      localStorage.setItem(movies_key, JSON.stringify(data));
      movies_value = data;
    }

    this.movies = movies_value;
  }

  get(id) {
    let returnValue = this.movies;
    if (arguments.length === 1) {
      for (let item in returnValue) {
        if (item.id === id) {
          returnValue = item;
          break;
        }
      }
    }

    return returnValue;
  }

  set(data, id) {
    if (arguments.length === 1) {
      this.movies.push(data)
    } else if (arguments.length === 2) {
      for (let item in this.movies) {
        if (item.id === id) {
          item.title = data.title;
          item.year = data.year;
          item.genre = data.genre;
          item.summary = data.summary;
          item.seen = data.seen;
        }
      }
    }

    localStorage.setItem('movies', JSON.stringify(this.movies));
  }

  remove(id) {
    for (let i = 0; i < this.movies.length; i++) {
      let item = this.movies[i];
      if (item.id === id) {
        this.movies.slice(i, 1)
        break;
      }
    }
  }
}