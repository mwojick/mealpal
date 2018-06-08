class CreateShops < ActiveRecord::Migration[5.2]
  def change
    create_table :shops do |t|
      t.string :name, null: false
      t.string :address
      t.float :latitude, null: false
      t.float :longitude, null: false
      t.integer :city_id, null: false

      t.timestamps
    end
    add_index :shops, :city_id
  end
end
