class Api::FavoritesController < ApplicationController

  before_action :require_login

  def index
    @favorites = current_user.favorites

    if @favorites
      render :index
    else
      render json: ["No favorites found"], status: 404
    end
  end

  def create
    @favorite = Favorite.new(favorite_params)

    if @favorite.save
      render :show
    else
      render json: @favorite.errors.full_messages, status: 422
    end
  end

  def destroy
    @favorite = current_user.favorites.find(params[:id])

    @favorite.destroy
    render json: {}
  end

  private

  def favorite_params
    params.require(:favorite).permit(:user_id, :shop_id)
  end
end
