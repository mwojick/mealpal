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
    all_treats = City.find_by(name: params[:city]).treats
    @treats = []
    all_treats.each do |treat|
      if treat.name.downcase.include?(params[:search.downcase])
        @treats << treat
      end
    end

    unless @treats.empty?
      @shops = @city.shops

      render :search
    else
      render json: ["No treats found"], status: 404
    end
  end
end
