# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Channel.destroy_all
channel_one = Channel.create({title: "music"})
channel_two = Channel.create({title: "outdoors"})
channel_three = Channel.create({title: "food"})

Message.destroy_all
Message.create({body: 'I love music!', author_id: 1, channel_id: 1})
Message.create({body: 'I love 21 Savage!', author_id: 2, channel_id: 1})
Message.create({body: 'I love Armin Van Buuren!', author_id: 2, channel_id: 1})
Message.create({body: 'I love Thomas Jack!', author_id: 1, channel_id: 1})

Message.create({body: 'I love outdoors!', author_id: 1, channel_id: 2})
Message.create({body: 'I love Yosemite!', author_id: 2, channel_id: 2})
Message.create({body: 'I love Big Sur!', author_id: 2, channel_id: 2})
Message.create({body: 'I love Yellowstone!', author_id: 1, channel_id: 2})

Message.create({body: 'I love food!', author_id: 1, channel_id: 3})
Message.create({body: 'I love crab legs!', author_id: 2, channel_id: 3})
Message.create({body: 'I love bacon cheeseburgers!', author_id: 2, channel_id: 3})
Message.create({body: 'I love au gratin!', author_id: 1, channel_id: 3})
