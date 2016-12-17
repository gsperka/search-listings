var Results = React.createClass({

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
