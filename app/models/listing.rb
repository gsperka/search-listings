class Listing < ActiveRecord::Base

	def self.by_tiebreaker_score 
		order(tiebreaker_sort: :desc)
	end


end
