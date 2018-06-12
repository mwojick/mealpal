@favorites.each do |fav|
  json.set! fav.id do
    json.extract! fav, :id, :user_id, :shop_id
  end
end
