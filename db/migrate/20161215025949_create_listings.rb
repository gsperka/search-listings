class CreateListings < ActiveRecord::Migration
  def change
    create_table :listings do |t|
    	t.string  :title
    	t.string  :why_stay_here
    	t.float   :lat
    	t.float   :lng
    	t.integer :num_bedrooms
    	t.float   :num_bathrooms
    	t.integer :sleeps_comfortably
    	t.integer :sleeps_max
    	t.string  :primary_small_image_url
    	t.string  :url
    	t.integer :nightly_from
    	t.integer :nightly_rate
    	t.text    :showcased_features, array: true, default: []
    	t.string  :city
    	t.string  :province
    	t.string  :country
    	t.integer :user_id
    	t.float   :user_rating
    	t.integer :num_reviews
    	t.float   :vaystays_weight
    	t.float   :tiebreaker_sort
    	
      t.timestamps null: false
    end
  end
end
