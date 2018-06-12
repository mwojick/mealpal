json.set! @favorite.id do
  json.extract! @favorite, :id, :user_id, :shop_id
end
