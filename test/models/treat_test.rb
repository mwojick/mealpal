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

require 'test_helper'

class TreatTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
