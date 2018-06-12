# == Schema Information
#
# Table name: favorites
#
#  id         :bigint(8)        not null, primary key
#  user_id    :integer          not null
#  shop_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

FactoryBot.define do
  factory :favorite do
    user_id 1
    shop_id 1
  end
end
