class Channel < ApplicationRecord
  validates :title, presence: true, uniqueness: true
  has_many :members
  has_many :messages
end
