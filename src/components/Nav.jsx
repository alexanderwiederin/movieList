var Nav = ({handleSearch, addMovie, toggleWatchStatus}) => {
	return (
	<div>
	  <div>
	    <input id="addBar" placeholder="add a movie..."></input>
	    <button onClick={addMovie}>add</button> 
	  </div>
	  <div>
	    <input id="searchBar" placeholder="search..."></input>
	    <button onClick={handleSearch}>search</button>
	  </div>
	  <div>
	    <button>watch</button>
	    <button>watched</button>
	  </div>
	</div>
	)
}

export default Nav;
	
