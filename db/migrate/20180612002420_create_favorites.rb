class CreateFavorites < ActiveRecord::Migration[5.2]
  def change
    create_table :favorites do |t|
      t.integer :user_id, null: false
      t.integer :shop_id, null: false

      t.timestamps
    end
    add_index :favorites, :shop_id
    add_index :favorites, [:user_id, :shop_id], unique: true
  end
end
