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

class Favorite < ApplicationRecord
  validates :user_id, :shop_id, presence: true
  validates :user_id, uniqueness: { scope: :shop_id }

  belongs_to :user
  belongs_to :shop

end
