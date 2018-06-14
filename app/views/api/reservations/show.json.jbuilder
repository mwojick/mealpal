
json.res @reservation, :id, :user_id, :treat_id, :date, :time
json.user @user, :id, :email, :name, :treats_left, :preferred_city, :company_name, :image_url
