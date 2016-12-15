# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

seed_data = File.read("public/results.json")
json = JSON.parse(seed_data)

json["data"].each do |data|
	Listing.create(
		title: data["title"], 
		why_stay_here: data["why_stay_here"], 
		lat: data["lat"], 
		lng: data["lng"], 
		num_bedrooms: data["num_bedrooms"], 
		num_bathrooms: data["num_bathrooms"], 
		sleeps_comfortably: data["sleeps_comfortably"], 
		sleeps_max: data["sleeps_max"], 
		primary_small_image_url: data["primary_small_image_url"], 
		url: data["url"], 
		nightly_from: data["nightly_from"], 
		nightly_rate: data["nightly_rate"], 
		showcased_features: data["showcased_features"], 
		city: data["city"], 
		province: data["province"], 
		country: data["country"], 
		user_id: data["user_id"], 
		user_rating: data["user_rating"], 
		num_reviews: data["num_reviews"], 
		vaystays_weight: data["vaystays_weight"], 
		tiebreaker_sort: data["tiebreaker_sort"]
	)
end