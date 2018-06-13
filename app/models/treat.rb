# == Schema Information
#
# Table name: treats
#
#  id          :bigint(8)        not null, primary key
#  name        :string           not null
#  description :string           not null
#  price       :float            not null
#  image_url   :string           not null
#  shop_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Treat < ApplicationRecord
  validates :name, :description, :price, :image_url, presence: true

  belongs_to :shop
  has_one :city, through: :shop

  has_many :reservations
end
