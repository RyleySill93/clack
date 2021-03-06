class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login(@user)
      render '/api/users/show'
    else
      render json: ["Invalid username/password"], status: 401
    end
  end

  def destroy
    if current_user
      logout
      render json: {}
    else
      render json: "No user currently logged in", status: 404
    end
  end

  def show
    @fake = Faker::Internet.user_name
    while @fake.length < 6
      @fake = Faker::Internet.user_name
    end
    render json: @fake, status: 200
  end
end
