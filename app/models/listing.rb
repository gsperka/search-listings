class Listing < ActiveRecord::Base

	before_save :replace_null_values

	def self.by_tiebreaker_score 
		order(tiebreaker_sort: :desc)
	end

	private 

	def replace_null_values
		self.city = "Not Currently Listed" if city == nil
  	self.province = "Not Currently Listed" if province == nil
  	self.country = "Not Currently Listed" if country == nil
	end

end
