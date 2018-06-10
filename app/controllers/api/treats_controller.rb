class Api::TreatsController < ApplicationController
  def index
    @city = City.find_by(name: params[:city])

    if @city
      @treats = @city.treats
      @shops = @city.shops

      render :index
    else
      render json: ["No treats found"], status: 404
    end
  end

  def search
    @city = City.find_by(name: params[:city])
    if @city
      all_treats = @city.treats
      all_shops = @city.shops

      @shops = all_shops
      @treats = []
      all_treats.each do |treat|
        if treat.name.downcase.include?(params[:search.downcase])
          @treats << treat
        end
      end

      unless @treats.empty?
        render :search
      else
        render json: ["No treats found"], status: 404
      end

    else
      render json: ["No city found"], status: 404
    end
  end
end
