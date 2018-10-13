import MovieListEntry from './MovieListEntry.js';

var MovieList = (props) => (
	<ul className="movie-list">
	{!!props.selectedMovies ? props.movies.map((movie) =>
		<MovieListEntry key={movie.title} movie={movie}/>) : <li>no movie found</li>}
	</ul>
);

MovieList.propTypes = {
  movies: React.PropTypes.array.isRequired
};


// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default MovieList;
