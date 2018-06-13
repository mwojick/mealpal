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

FactoryBot.define do
  factory :reservation do
    user_id 1
    treat_id 1
    date "2018-06-12"
    time "2018-06-12 22:37:46"
  end
end
