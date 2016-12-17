class ResultsController < ApplicationController

	def index
		@all_listings = Listing.by_tiebreaker_score
	end

	def show
		@listing = Listing.find(params[:id])
	end

end
