
class MovieListEntry extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			watch: true
		};
	}

	handleStatusChange() {
		console.log('test')
		var currentState = this.state.watch;
		this.setState({
			watch: !currentState
		});
	}

	render() {
		return (
			<div className="movie-list-entry">
			  <div>
		      {this.props.movie.display ? <li >{this.props.movie.title}</li> : null}
		      </div>
		      <div>
		      {this.props.movie.display && this.state.watch ? <button onClick={this.handleStatusChange.bind(this)}>Watch</button> : null}
		      </div>
		      <div>
		      {this.props.movie.display && !this.state.watch ? <button onClick={this.handleStatusChange.bind(this)}>Watched</button> : null}
		      </div>
		  </div>
		)
	}

}



MovieListEntry.propTypes = {
  movie: React.PropTypes.object.isRequired
};

export default MovieListEntry;

// <button className="watchButton">To Watch</button>


