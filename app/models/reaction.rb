class Reaction < ApplicationRecord
  validates :user, :message, :image, presence: true

  belongs_to :user
  belongs_to :message
end
