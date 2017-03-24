class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    @user.image = Faker::Avatar.image
    if @user.save
      login(@user)
      render :show
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
