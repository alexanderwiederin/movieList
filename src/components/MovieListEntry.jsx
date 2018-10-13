var MovieListEntry = ({key, movie}) => {
	console.log('movie: ', movie);
	return (
		<div>
		  {movie.display ? <li className="movie-list-entry">{movie.title}</li> : null}
		</div>
	 )
}



MovieListEntry.propTypes = {
  movie: React.PropTypes.object.isRequired
};

export default MovieListEntry;

