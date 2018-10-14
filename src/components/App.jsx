
import MovieList from './MovieList.js';
import Nav from './Search.js';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      movies: props.movies,
      selectedMovies: props.movies.filter((movie) => movie.display === true).length
    };
  }

  handleSearch() {
    var searchTerm = document.getElementById('searchBar').value.toLowerCase();
    var movies = this.state.movies.slice();

    movies.map((movie) => {
      var movieTitle = movie.title.toLowerCase();
      movieTitle.includes(searchTerm) ? movie.display = true : movie.display = false;
      return movie;
    });

    var selectedMovies = movies.filter((movie) => movie.display === true).length;
    this.setState({movies, selectedMovies});
  }

  addMovie() {
    var movieName = document.getElementById('addBar').value.toLowerCase();
    var movieObject = {
      display: true,
      title: movieName
    }

    var movies = this.state.movies.slice();
    movies.push(movieObject);
    var selectedMovies = movies.filter((movie) => movie.display === true).length;
    this.setState({movies, selectedMovies});

  }

  toggleWatchStatus(video) {
    console.log('test');
  }

  render() {

    return (
      <div className="movieList">
      <h1>MovieList</h1>
       <div>
        <Nav handleSearch={this.handleSearch.bind(this)} addMovie={this.addMovie.bind(this)}/>
        </div>
        <div>
          <MovieList movies={this.state.movies} selectedMovies={this.state.selectedMovies} toggleWatchStatus={this.toggleWatchStatus.bind(this)}/>
        </div>
      </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
