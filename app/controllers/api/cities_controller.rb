class Api::CitiesController < ApplicationController
  def index
    @cities = City.all

    if @cities
      render :index
    else
      render json: ["No cities found"], status: 404
    end

  end
end
