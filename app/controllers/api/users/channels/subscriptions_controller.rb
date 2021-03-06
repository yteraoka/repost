class Api::Users::Channels::SubscriptionsController < Api::ApplicationController
  before_action :authorize_user
  before_action :set_user
  before_action :set_channel

  def create
    @user.subscribe(@channel)
  end

  def destroy
    @user.unsubscribe(@channel)
    render status: :ok, json: { id: @user.id }
  end

  private

  def authorize_user
    authorize Subscription
  end

  def set_user
    @user = User.find(params[:user_id])
  end

  def set_channel
    @channel = Channel.find(params[:channel_id])
  end
end
