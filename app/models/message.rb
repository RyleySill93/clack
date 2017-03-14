class Message < ApplicationRecord
  validates :author_id, :channel_id, :body, presence: true

  belongs_to :author
  belongs_to :channel
end
