# App.room = App.cable.subscriptions.create "RoomChannel",
#   connected: ->
#     # Called when the subscription is ready for use on the server
#
#   disconnected: ->
#     # Called when the subscription has been terminated by the server
#
#   received: (data) ->
#     # Called when there's incoming data on the websocket for this channel
#     $('#chat-list').append data['message']
#
#   speak: (message, channelId) ->
#     @perform 'speak', {message: message, channel_id: channelId}
#
#   $(document).on 'keypress', '[data-behavior~=room_speaker]', (event) ->
#     # debugger
#     if event.keyCode is 13 # return/enter = send
#       channelId = document.getElementById("channel-id").value
#       App.room.speak event.target.value, channelId
#       event.target.value = ''
#       event.preventDefault()
