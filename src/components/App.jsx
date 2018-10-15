
import MovieList from './MovieList.js';
import Nav from './Nav.js';


class App extends React.Component {

  constructor() {
    super();

    this.state = {
      movies: [
      {title: 'Mean Girls', display: true},
      {title: 'Hackers' , display: true},
      {title: 'The Grey' , display: true},
      {title: 'Sunshine' , display: true},
      {title: 'Ex Machina' , display: true},
      ],
      
      selectedMovies: 5,

      watchStatus: null
    };
    console.log(this.state.movies);
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

  setWatchStatusToTrue() {
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
          <MovieList movies={this.state.movies} selectedMovies={this.state.selectedMovies} />
        </div>
      </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
