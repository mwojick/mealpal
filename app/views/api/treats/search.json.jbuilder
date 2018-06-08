
json.treats do
  @treats.each do |treat|
    json.set! treat.id do
      json.extract! treat, :id, :name, :description, :price, :image_url, :shop_id
    end
  end
end

json.shops do
  @shops.each do |shop|
    json.set! shop.id do
      json.extract! shop, :id, :name, :address, :latitude, :longitude, :city_id
    end
  end
end
