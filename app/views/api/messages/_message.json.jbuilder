json.body message.body
json.id message.id
json.reactions message.uniq_reactions.each do |reaction|
  json.image reaction.image
  json.has_reacted message.has_reacted?(reaction, current_user)
  json.likes message.likes(reaction)
  json.id reaction.id
end
json.gif_url message.gif_url
json.author_id message.author_id
json.channel_id message.channel_id
json.author message.author
json.created_at message.created_at
json.post_time message.created_at.getlocal.strftime('%l:%M %p')
