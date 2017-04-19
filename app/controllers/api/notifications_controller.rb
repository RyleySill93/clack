class Api::NotificationsController < ApplicationController
  def create
    channel_id = params[:channel_id]
    user_id = current_user.id
    @notification = Notification.new
    @notification.channel_id = channel_id
    @notification.user_id = user_id

    if @notification.save
      render :show
    else
      render json: @notification.errors.full_messages, status: 422
    end
  end

  def destroy
    @notifications = Notification.where(channel_id: params[:id])
      .where(user_id: current_user.id)
    @notifications.destroy_all
    render json: "Complete", status: 200
  end
end
