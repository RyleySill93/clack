class Message < ApplicationRecord
  validates :author, :channel, presence: true
  after_create_commit { MessageBroadcastJob.perform_later(self, self.channel) }

  validate :ensure_body

  def ensure_body
    unless self.body.length > 0 || self.gif_url.length > 0
      errors.add(:body, "can't be blank")
    end
  end

  def uniq_reactions
    images = []
    uniques = []
    reactions.each do |reaction|
      uniques.push(reaction) unless images.include?(reaction.image)
      images.push(reaction.image)
    end
    uniques
  end

  def has_reacted?(reaction, user)
    #current user has reacted with this reaction
    user.reactions.where(message_id: self.id).include?(reaction)
  end

  def likes(reaction)
    reactions.where(image: reaction.image).count
  end

  has_many :reactions

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'User'

  belongs_to :channel,
    primary_key: :id,
    foreign_key: :channel_id,
    class_name: 'Channel'

end
