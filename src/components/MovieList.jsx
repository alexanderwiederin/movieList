import MovieListEntry from './MovieListEntry.js';

var MovieList = ({movies, selectedMovies, toggleWatchStatus}) => (
	<ul className="movie-list">
	{!!selectedMovies ? movies.map((movie) =>
		<MovieListEntry key={movie.title} movie={movie} toggleWatchStatus={toggleWatchStatus}/>) : <li>no movie found</li>}
	</ul>
);

MovieList.propTypes = {
  movies: React.PropTypes.array.isRequired
};


// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default MovieList;
