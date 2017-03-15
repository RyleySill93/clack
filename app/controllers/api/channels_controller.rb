class Api::ChannelsController < ApplicationController
  def create
    @channel = Channel.new(channel_params)
    if @channel.save
      render :show
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def update
    @channel = Channel.find(params[:id])
    if @channel.update(channel_params)
      render :show
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def show
    @channel = Channel.find(params[:id])
  end

  def index
    @channels = Channel.all
  end

  def destroy
    Channel.find(params[:id]).delete
  end

  private

  def channel_params
    params.require(:channel).permit(:title, :kind)
  end
end
