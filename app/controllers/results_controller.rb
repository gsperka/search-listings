class ResultsController < ApplicationController

	def index
		@all_listings = Listing.all
	end

end
