class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    @user.image = Faker::Avatar.image
    if @user.save
      a = Channel.create!(title: User.find(51).username, kind: 'direct')
      Membership.create!(user_id: @user.id, channel_id: a.id)
      Membership.create!(user_id: 51, channel_id: a.id)
      (1..4).each do |num|
        Membership.create!(user_id: @user.id, channel_id: num)
      end

      (1..2).each do |num|
        channel = Channel.create!(title: User.find(num).username, kind: 'direct')
        Membership.create!(user_id: @user.id, channel_id: channel.id)
        Membership.create!(user_id: num, channel_id: channel.id)
        25.times do
          Message.create!(body: Faker::Hipster.sentence,
                         author_id: [@user.id, num].sample, channel_id: channel.id)
        end
      end

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
