class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    # debugger
    if @user.save
      # debugger
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :name, :treats_left, :preferred_city, :company_name, :image_url)
  end
end
