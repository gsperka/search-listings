var Results = React.createClass({

	render: function() {
	 var listings = this.props.results

	 var all_objects = listings.map(function(result,i){
	 		return (
	 			<div key={i} className="result">
	 			  <img className="img-responsive" src={result.primary_small_image_url} />
	 				<h3>{result.title}</h3>

	 				<h3>City:</h3>
	 				<p>{result.city}</p>

	 				<h3>Province:</h3>
	 				<p>{result.province}</p>

	 				<h3>Nightly From:</h3>
	 				<p>{result.nightly_from}</p>

	 				<h3>Nightly Rate:</h3>
	 				<p>{result.nightly_rate}</p>

	 				<h5><a href={"/results/" + result.id}>See Full Listing</a></h5>
	 			</div>

	 		)
	 })


	 return <div>{all_objects}</div>
}

});
