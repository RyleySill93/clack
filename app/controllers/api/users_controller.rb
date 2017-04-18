class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    @user.image = "https://res.cloudinary.com/dwqeotsx5/image/upload/v1489538729/icon_jlo9le.png"
    if @user.save
      login(@user)
      render :show
      a = Channel.create!(title: User.find(1).username, kind: 'direct')
      Membership.create!(user_id: @user.id, channel_id: a.id)
      Membership.create!(user_id: 1, channel_id: a.id)
      (1..4).each do |num|
        Membership.create!(user_id: @user.id, channel_id: num)
      end

    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    @users = User.all
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
