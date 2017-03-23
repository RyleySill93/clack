class Message < ApplicationRecord
  validates :author, :channel, presence: true
  after_create_commit { MessageBroadcastJob.perform_later(self, self.channel) }

  validate :ensure_body

  def ensure_body
    unless self.body.length > 0 || self.gif_url.length > 0
      errors.add(:body, "can't be blank")
    end
  end

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'User'

  belongs_to :channel,
    primary_key: :id,
    foreign_key: :channel_id,
    class_name: 'Channel'

end
