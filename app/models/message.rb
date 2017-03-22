class Message < ApplicationRecord
  validates :author, :channel, :body, presence: true
  after_create_commit { MessageBroadcastJob.perform_later(self, self.channel) }

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'User'

  belongs_to :channel,
    primary_key: :id,
    foreign_key: :channel_id,
    class_name: 'Channel'

end
