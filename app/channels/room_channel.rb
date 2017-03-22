class RoomChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_from params[:channel_name]
  end

  # def unsubscribed
  #   # Any cleanup needed when channel is unsubscribed
  # end
  #
  # def speak(data)
  #   # debugger
  #   Message.create! body: data['message'], author_id: 1, channel_id: 1
  #   ActionCable.server.broadcast "room_channel", message: data['message']
  # end
end
