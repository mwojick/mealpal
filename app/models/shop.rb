# == Schema Information
#
# Table name: shops
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  address    :string
#  latitude   :float            not null
#  longitude  :float            not null
#  city_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Shop < ApplicationRecord
  validates :name, :latitude, :longitude, presence: true

  has_many :treats
  has_many :favorites
  belongs_to :city

  def self.in_bounds(bounds)
    self.where("latitude < ?", bounds[:northEast][:lat])
      .where("latitude > ?", bounds[:southWest][:lat])
      .where("longitude > ?", bounds[:southWest][:lng])
      .where("longitude < ?", bounds[:northEast][:lng])
  end
end
