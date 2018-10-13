var MovieListEntry = ({key, movie, toggleWatchStatus}) => {
	return (
		<div className="movie-list-entry">
		  {movie.display ? <li >{movie.title}</li> : null}
		  {movie.display && movie.status ? <button onClick={()=> toggleWatchStatus(movie)}>watch</button> : null}
		</div>
	 )
}



MovieListEntry.propTypes = {
  movie: React.PropTypes.object.isRequired
};

export default MovieListEntry;

// <button className="watchButton">To Watch</button>

