class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :name
      t.integer :treats_left, null: false, default: 20
      t.string :preferred_city, null: false, default: "San Francisco"
      t.string :company_name
      t.string :image_url
      t.string :password_digest, null: false
      t.string :session_token, null: false

      t.timestamps
    end

    add_index :users, :email, unique: true
    add_index :users, :session_token, unique: true
  end
end
