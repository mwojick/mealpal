json.set! user.id do
  json.extract! user, :id, :email, :name, :treats_left, :preferred_city, :company_name, :image_url
end
