# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([ name: 'Star Wars' ,  name: 'Lord of the Rings' ])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
u1 = User.create(username: 'ryley', password_digest: '101', session_token: '101')
u2 = User.create(username: 'natalie', password_digest: '102', session_token: '102')
u3 = User.create(username: 'baron', password_digest: '103', session_token: '103')
u4 = User.create(username: 'zoe', password_digest: '104', session_token: '104')

Channel.destroy_all
c1 = Channel.create(title: "general", kind: 'channel')
c2 = Channel.create(title: "music", kind: 'channel')
c3 = Channel.create(title: "outdoors", kind: 'channel')
c4 = Channel.create(title: "food", kind: 'channel')

c5 = Channel.create(title: "natalie", kind: 'direct')
c6 = Channel.create(title: "baron", kind: 'direct')
c7 = Channel.create(title: "zoe", kind: 'direct')

Membership.destroy_all
#general
Membership.create(user: u1, channel: c1)
Membership.create(user: u2, channel: c1)
Membership.create(user: u3, channel: c1)
Membership.create(user: u4, channel: c1)
#music
Membership.create(user: u1, channel: c2)
Membership.create(user: u2, channel: c2)
Membership.create(user: u4, channel: c2)
#outdoors
Membership.create(user: u1, channel: c3)
Membership.create(user: u3, channel: c3)
Membership.create(user: u4, channel: c3)
#food
Membership.create(user: u1, channel: c4)
Membership.create(user: u2, channel: c4)
Membership.create(user: u3, channel: c4)
Membership.create(user: u4, channel: c4)
#natalie
Membership.create(user: u1, channel: c5)
Membership.create(user: u2, channel: c5)
#baron
Membership.create(user: u1, channel: c6)
Membership.create(user: u3, channel: c6)
#zoe
Membership.create(user: u1, channel: c7)
Membership.create(user: u4, channel: c7)

Message.destroy_all
Message.create(body: 'I love music!', author_id: 1, channel_id: 1)
Message.create(body: 'I love 21 Savage!', author_id: 2, channel_id: 1)
Message.create(body: 'I love Armin Van Buuren!', author_id: 2, channel_id: 1)
Message.create(body: 'I love Thomas Jack!', author_id: 1, channel_id: 1)

Message.create(body: 'I love outdoors!', author_id: 1, channel_id: 2)
Message.create(body: 'I love Yosemite!', author_id: 2, channel_id: 2)
Message.create(body: 'I love Big Sur!', author_id: 2, channel_id: 2)
Message.create(body: 'I love Yellowstone!', author_id: 1, channel_id: 2)

Message.create(body: 'I love food!', author_id: 1, channel_id: 3)
Message.create(body: 'I love crab legs!', author_id: 2, channel_id: 3)
Message.create(body: 'I love bacon cheeseburgers!', author_id: 2, channel_id: 3)
Message.create(body: 'I love au gratin!', author_id: 1, channel_id: 3)

Message.create(body: 'I love food!', author_id: 1, channel_id: 4)
Message.create(body: 'I love crab legs!', author_id: 2, channel_id: 4)
Message.create(body: 'I love bacon cheeseburgers!', author_id: 2, channel_id: 4)
Message.create(body: 'I love au gratin!', author_id: 1, channel_id: 4)

Message.create(body: 'I love food!', author_id: 1, channel_id: 5)
Message.create(body: 'I love crab legs!', author_id: 2, channel_id: 5)
Message.create(body: 'I love bacon cheeseburgers!', author_id: 2, channel_id: 5)
Message.create(body: 'I love au gratin!', author_id: 1, channel_id: 5)

Message.create(body: 'I love food!', author_id: 1, channel_id: 6)
Message.create(body: 'I love crab legs!', author_id: 2, channel_id: 6)
Message.create(body: 'I love bacon cheeseburgers!', author_id: 2, channel_id: 6)
Message.create(body: 'I love au gratin!', author_id: 1, channel_id: 6)
