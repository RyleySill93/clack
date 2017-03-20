# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([ name: 'Star Wars' ,  name: 'Lord of the Rings' ])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
User.create(username: 'GuestUser', password: 'password', image: Faker::Avatar.image)

50.times do
  User.create(username: Faker::Internet.user_name, image: Faker::Avatar.image, password: 'password')
end


Channel.destroy_all
c1 = Channel.create(title: "general", kind: 'channel')
c2 = Channel.create(title: "music", kind: 'channel')
c3 = Channel.create(title: "outdoors", kind: 'channel')
c4 = Channel.create(title: "food", kind: 'channel')

c5 = Channel.create(title: "natalie", kind: 'direct')
c6 = Channel.create(title: "baron", kind: 'direct')
c7 = Channel.create(title: "zoe", kind: 'direct')

Membership.destroy_all
c1.member_ids = [1]
c2.member_ids = [1]
c3.member_ids = [1]
c4.member_ids = [1]
c5.member_ids = [1]
c6.member_ids = [1]
c7.member_ids = [1]

200.times do
  Membership.create(user_id: (1..50).to_a.sample, channel_id: (1..4).to_a.sample)
end

(1..4).each do |num|
  (25..40).to_a.sample.times do
    user_id = (1..50).to_a.sample
    channel = Channel.find(num)
    unless (channel.member_ids.include?(user_id))
      Membership.create(user_id: user_id, channel_id: num)
    end
  end
end


Message.destroy_all

200.times do
  Message.create(body: Faker::Hipster.sentence, author_id: (1..10).to_a.sample, channel_id: 1)
  Message.create(body: Faker::Hipster.sentence, author_id: (1..10).to_a.sample, channel_id: 2)
  Message.create(body: Faker::Hipster.sentence, author_id: (1..10).to_a.sample, channel_id: 3)
  Message.create(body: Faker::Hipster.sentence, author_id: (1..10).to_a.sample, channel_id: 4)
  Message.create(body: Faker::Hipster.sentence, author_id: c5.member_ids.sample, channel_id: 4)
  Message.create(body: Faker::Hipster.sentence, author_id: c6.member_ids.sample, channel_id: 4)
  Message.create(body: Faker::Hipster.sentence, author_id: c7.member_ids.sample, channel_id: 4)
end
