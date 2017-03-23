class Api::ReactionsController < ApplicationController
  def create
    @reaction = Reaction.new(reaction_params)
    @reaction.user_id = current_user.id
    if @reaction.save
      @message = Message.find(@reaction.message_id)
      render '/api/messages/show.json.jbuilder'
    else
      render json: @reaction.errors.full_messages, status: 422
    end
  end

  def destroy
    @message = Message.find(params[:messageId])
    Reaction.where(image: reaction_params[:image]).where(user_id: current_user.id)[0].delete
    render '/api/messages/show.json.jbuilder'
  end

  private
  def reaction_params
    params.require(:reaction).permit(:message_id, :image)
  end
end
