class ChangeTreatPriceType < ActiveRecord::Migration[5.2]
  def change
    change_column :treats, :price, :float
  end
end
