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

require 'test_helper'

class ShopTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
