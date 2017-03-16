class Channel < ApplicationRecord
  validates :title, presence: true, uniqueness: true
  has_many :members,
    through: :memberships,
    source: :user
  has_many :messages
end
