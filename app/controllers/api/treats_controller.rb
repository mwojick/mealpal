class Api::TreatsController < ApplicationController
  def index
    @treats = City.find_by(name: params[:city]).treats
    if @treats
      render :index
    else
      render json: ["No treats found"], status: 404
    end
  end

  def search
    all_treats = City.find_by(name: params[:city]).treats
    @treats = []
    all_treats.each do |treat|
      if treat.name.downcase.include?(params[:search.downcase])
        @treats << treat
      end
    end

    if @treats
      render :index
    else
      render json: ["No treats found"], status: 404
    end
  end
end
