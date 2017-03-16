


# json.extract! message, :body,
#                        :author_id,
#                        :channel_id,
#                        :author,
#                        :created_at


#

json.body message.body
json.author_id message.author_id
json.channel_id message.channel_id
json.author message.author
json.created_at message.created_at
json.post_time message.created_at.getlocal.strftime('%l:%M %p')
