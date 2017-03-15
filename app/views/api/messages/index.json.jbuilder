#why didnt the below work? I had to rerender to show the page
# json.array! @messages, :body, :author_id, :channel_id, :created_at

@messages.each do |message|
  json.set! message.id do
    json.partial! 'message', message: message
  end
end

# @posts.each do |post|
#   json.set! post.id do
#     json.partial! 'post', post: post
#   end
# end
