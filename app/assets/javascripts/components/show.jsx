var ShowResult = React.createClass({

  checkIfNil: function(val) {
    if (val) {
      return (
        <span>{val}</span>
      )
    } else {
      return (
        <span>Not currently listed</span>
      )
    }
  },

  render: function() {
    return (
      <div>
        <div className="single-listing">
          <img src={this.props.listing.primary_small_image_url} />
          <h1>{this.checkIfNil(this.props.listing.title)}</h1>
        
          <h3>Why stay here?</h3>
          <p>{this.checkIfNil(this.props.listing.why_stay_here)}</p>

          <h3>Where?</h3>
          <p>City: {this.checkIfNil(this.props.listing.city)}</p>
          <p>Province: {this.checkIfNil(this.props.listing.province)}</p>
          <p>Country: {this.checkIfNil(this.props.listing.country)}</p>

          <h3>Cost:</h3>
          <p>Nightly From: ${this.checkIfNil(this.props.listing.nightly_from)}</p>
          <p>Nightly Rate: ${this.checkIfNil(this.props.listing.nightly_rate)}</p>

          <h3>Features:</h3>
          <p>Number of Bedrooms: {this.checkIfNil(this.props.listing.num_bedrooms)}</p>
          <p>Number of Bathrooms: {this.checkIfNil(this.props.listing.num_bathrooms)}</p>
          <p>Sleeps Max: {this.checkIfNil(this.props.listing.sleeps_max)} (Sleeps Comfortably: {this.checkIfNil(this.props.listing.sleeps_comfortably)})</p>
          <p>Showcased Features: {this.checkIfNil(this.props.listing.showcased_features)}</p>

          <h3>Reviews:</h3>
          <p>User Rating: {this.checkIfNil(this.props.listing.user_rating)}</p>
          <p>Number of Reviews: {this.checkIfNil(this.props.listing.num_reviews)}</p>
        </div>

        <div className="btn">
          <a href="/">Back to All Listings</a>
        </div>
      </div>
    )
  }
});