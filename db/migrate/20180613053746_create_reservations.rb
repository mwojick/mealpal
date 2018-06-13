class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.integer :user_id, null: false
      t.integer :treat_id, null: false
      t.date :date, null: false
      t.time :time, null: false
      t.datetime :datetime

      t.timestamps
    end
    add_index :reservations, :user_id
    add_index :reservations, :treat_id
  end
end
