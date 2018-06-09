# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

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
  ]

  users.each do |user|
    User.create!(user)
  end
end

ActiveRecord::Base.transaction do
  City.destroy_all

  cities = [
    {
      name: "San Francisco",
      latitude: 37.789232,
      longitude: -122.409499
    },
    {
      name: "New York",
      latitude: 40.750617,
      longitude: -73.989161
    },
    {
      name: "Boston",
      latitude: 42.360706,
      longitude: -71.061102
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

  3.times do |i|
    lat = cities[i][:latitude]
    long = cities[i][:longitude]
    30.times do |j|
      loc = RandomLocation.near_by(lat, long, 700)
      shop = {
        name: Faker::Company.name,
        latitude: loc[0],
        longitude: loc[1],
        city_id: cities[i].id
      }
      shops << shop
    end
  end

  shops.each_with_index do |shop, i|
    Shop.create!(shop)
    sleep(2)
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

  90.times do |i|
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
