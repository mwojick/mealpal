# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# from https://stackoverflow.com/questions/43195899/how-to-generate-random-coordinates-within-a-circle-with-specified-radius
def random_point_in_disk(max_radius)
  r = max_radius * rand**0.5
  theta = rand * 2 * Math::PI
  [r * Math.cos(theta), r * Math.sin(theta)]
end

EarthRadius = 6371 # km
OneDegree = EarthRadius * 2 * Math::PI / 360 * 1000 # 1° latitude in meters

def random_location(lon, lat, max_radius)
  dx, dy = random_point_in_disk(max_radius)
  random_lat = lat + dy / OneDegree
  random_lon = lon + dx / ( OneDegree * Math::cos(lat * Math::PI / 180) )
  [random_lon, random_lat]
end

ActiveRecord::Base.transaction do
  User.destroy_all

  users = [
    {
      email: 'demo',
      password: 123456,
      preferred_city: 'San Francisco'
    },
    {
      email: 'ny',
      password: 123456,
      preferred_city: 'New York'
    },
    {
      email: 'bos',
      password: 123456,
      preferred_city: 'Boston'
    },
    {
      email: 'sea',
      password: 123456,
      preferred_city: 'Seattle'
    },
    {
      email: 'chi',
      password: 123456,
      preferred_city: 'Chicago'
    },
    {
      email: 'tor',
      password: 123456,
      preferred_city: 'Toronto'
    },
  ]

  users.each do |user|
    User.create!(user)
  end
end

ActiveRecord::Base.transaction do
  City.destroy_all

  cities = [
    {
      name: "Boston",
      latitude: 42.360706,
      longitude: -71.061102
    },
    {
      name: "Chicago",
      latitude: 41.883793,
      longitude: -87.636438
    },
    {
      name: "New York",
      latitude: 40.750617,
      longitude: -73.989161
    },
    {
      name: "San Francisco",
      latitude: 37.794112,
      longitude: -122.405052
    },
    {
      name: "Seattle",
      latitude: 47.612927,
      longitude: -122.334233
    },
    {
      name: "Toronto",
      latitude: 43.650943,
      longitude: -79.388631
    }
  ]

  cities.each do |city|
    City.create!(city)
  end
end

ActiveRecord::Base.transaction do
  Shop.destroy_all

  shops = []
  cities = City.all

  (cities.length).times do |i|
    lat = cities[i][:latitude]
    long = cities[i][:longitude]
    36.times do |j|
      loc = random_location(long, lat, 700)
      shop = {
        name: Faker::Company.name,
        latitude: loc[1],
        longitude: loc[0],
        city_id: cities[i].id
      }
      shops << shop
    end
  end

  shops.each_with_index do |shop, i|
    Shop.create!(shop)
    sleep(0)
    puts "created #{i} stores"
  end
end

# https://source.unsplash.com/collection/941995/480x480/?sig=1

ActiveRecord::Base.transaction do
  Treat.destroy_all

  imageWidth = 480
  imageHeight = 480
  collectionID = 941995
  treats = []

  shops = Shop.all

  (shops.length).times do |i|
    name = Faker::Dessert.variety

    description = ''
    4.times do |j|
      description += Faker::Dessert.topping + ", "
    end
    description += Faker::Dessert.topping

    price = rand(3.0..8.0).round(2)

    randomNumber = rand(1..200)
    image_url = "https://source.unsplash.com/collection/#{collectionID}/#{imageWidth}x#{imageHeight}/?sig=#{randomNumber}"

    shop_id = shops[i].id

    treats << {
      name: name,
      description: description,
      price: price,
      image_url: image_url,
      shop_id: shop_id
    }
  end

  treats.each do |treat|
    Treat.create!(treat)
  end
end
