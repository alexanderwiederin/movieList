var Nav = ({handleSearch, addMovie}) => {
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
	</div>
	)
}

export default Nav;
	
