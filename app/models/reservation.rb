# == Schema Information
#
# Table name: reservations
#
#  id         :bigint(8)        not null, primary key
#  user_id    :integer          not null
#  treat_id   :integer          not null
#  date       :date             not null
#  time       :time             not null
#  datetime   :datetime
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Reservation < ApplicationRecord
  validates :date, :time, presence: true

  belongs_to :user
  belongs_to :treat
end
