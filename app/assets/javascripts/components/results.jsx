var Sort = React.createClass({

	sortResult: function(field) {
		console.log(this.props.results)
		var results = this.props.results;
		this.props.sortResultsStateBy(field, results);
	},

	render: function() {

		return (
			<div className="sort-section">
        <div className="" onClick={this.sortResult.bind(this,['user_rating', 'tiebreaker_sort'])} >User Rating (Ascending)</div>
        <div className="" onClick={this.sortResult.bind(this,['-user_rating', '-tiebreaker_sort'])} >User Rating (Descending)</div>
        <div className="" onClick={this.sortResult.bind(this,['sleeps_max', 'sleeps_comfortably', 'tiebreaker_sort'])} >Sleeps Max (Ascending)</div>
        <div className="" onClick={this.sortResult.bind(this,['-sleeps_max', '-sleeps_comfortably', '-tiebreaker_sort'])} >Sleeps Max (Descending)</div>
      </div>
		)

	}

});

var SortableResultsTable = React.createClass({

	getInitialState: function() {
		return {results : this.props.results}
	},

	fieldSorter: function(fields) {
		console.log(fields)
		return function (a, b) {
        return fields
            .map(function (o) {
                var dir = 1;
                if (o[0] === '-') {
                   dir = -1;
                   o=o.substring(1);
                }
                if (a[o] > b[o]) return dir;
                if (a[o] < b[o]) return -(dir);
                return 0;
            })
            .reduce(function firstNonZeroValue (p,n) {
                return p ? p : n;
            }, 0);
    };
	},

	sortResultsStateBy: function(field, results) {

		var sortedResults = results.sort(this.fieldSorter(field))

		this.setState({
			results: sortedResults
		})
	},

	render: function(){
		return (
			<div>
				<Sort results={this.props.results} sortResultsStateBy={this.sortResultsStateBy} />
				<Listing results={this.props.results} />
			</div>
		)

	}
});

var Listing = React.createClass({

	render: function() {
	 var listings = this.props.results

	function checkIfNil(val) {
		if (val) {
			return (
				<span>{val}</span>
			)
		} else {
			return (
				<span>Not currently listed</span>
			)
		}
	}

	 var all_objects = listings.map(function(result,i){
	 		return (
	 			<div key={i} className="result">
	 			  <img className="img-responsive" src={result.primary_small_image_url} />
	 				<h3>{checkIfNil(result.title)}</h3>
	 					
	 				<h3>User Rating: {checkIfNil(result.user_rating)}</h3>
	 				<h3>Sleeps Max: {checkIfNil(result.sleeps_max)}</h3>


	 				<h3>City:</h3>
	 				<p>{checkIfNil(result.city)}</p>

	 				<h3>Province:</h3>
	 				<p>{checkIfNil(result.province)}</p>

	 				<h3>Nightly From:</h3>
	 				<p>${checkIfNil(result.nightly_from)}</p>

	 				<h3>Nightly Rate:</h3>
	 				<p>${checkIfNil(result.nightly_rate)}</p>

	 				<h5><a href={"/results/" + result.id}>See Full Listing</a></h5>
	 			</div>

	 		)
	 })

	 return <div>{all_objects}</div>
}

});








