var Sort = React.createClass({

	sortResult: function(field) {
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
		return {
      results : this.props.results,
      inputValue : ''
    }
	},

  updateInputValue: function(event) {
    var sleepValue = event.target.value

    this.setState({
      inputValue: event.target.value
    })    

  },

  // source: http://stackoverflow.com/questions/6913512/how-to-sort-an-array-of-objects-by-multiple-fields/30446887#30446887	
  fieldSorter: function(fields) {
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
        <p className="search-field">Minimum Number of Beds Needed: <input value={this.state.inputValue} onChange={this.updateInputValue} /></p>
				<Sort results={this.props.results} sortResultsStateBy={this.sortResultsStateBy} />
				<Listing results={this.props.results} sleepsMax={this.state.inputValue} />
			</div>
		)

	}
});

var Listing = React.createClass({

	render: function() {
    console.log(this.props.sleepsComfortably)
	 var listings = this.props.results
   var sleepsMax = this.props.sleepsMax

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
    if (result.sleeps_max >= sleepsMax) {
      return (
        <div key={i} className="result">
          <img className="img-responsive" src={result.primary_small_image_url} />
          <h2>{checkIfNil(result.title)}</h2>
            
          <h3>City: {checkIfNil(result.city)}</h3>

          <h3>Province: {checkIfNil(result.province)}</h3>

          <h3>Nightly From: ${checkIfNil(result.nightly_from)}</h3>

          <h3>Nightly Rate: ${checkIfNil(result.nightly_rate)}</h3>

          <h3>User Rating: {checkIfNil(result.user_rating)}</h3>
            
          <h3>Sleeps Max: {checkIfNil(result.sleeps_max)}</h3>

          <h5><a href={"/results/" + result.id}>See Full Listing</a></h5>
        </div>
      )
    }
	 })

	 return <div>{all_objects}</div>
}

});








