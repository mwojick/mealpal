class Api::TreatsController < ApplicationController
  def index
    @city = City.find_by(name: params[:city])

    if @city
      @treats = @city.treats
      @shops = []
      @treats.each do |treat|
        @shops << treat.shop
      end

      render :index
    else
      render json: ["No city/treats found"], status: 404
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
      @shops = []
      @treats.each do |treat|
        @shops << treat.shop
      end
      render :search
    else
      render json: ["No treats found"], status: 404
    end
  end
end
