class CreateTreats < ActiveRecord::Migration[5.2]
  def change
    create_table :treats do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.integer :price, null: false
      t.string :image_url, null: false
      t.integer :shop_id, null: false

      t.timestamps
    end
    add_index :treats, :shop_id
  end
end
