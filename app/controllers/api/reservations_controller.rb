class Api::ReservationsController < ApplicationController

  before_action :require_login

  def index
    @reservations = current_user.reservations

    if @reservations
      render :index
    else
      render json: ["No reservations found"], status: 404
    end
  end

  def create

    if params[:date]
      date = params[:date]
    else
      date = Date.today + 1
    end

    @reservation = Reservation.new(
      user_id: params[:user_id],
      treat_id: params[:treat_id],
      time: params[:time],
      date: date
      )

    if @reservation.save
      render :show
    else
      render json: @reservation.errors.full_messages, status: 422
    end

  end

  def update
    @reservation = current_user.reservations.find(params[:id])

    if params[:date]
      date = params[:date]
    else
      date = Date.today + 1
    end

    if @reservation.update_attributes(
      user_id: params[:user_id],
      treat_id: params[:treat_id],
      time: params[:time],
      date: date
      )
      render :show
    else
      render json: @reservation.errors.full_messages, status: 422
    end

  end

  def destroy
    @reservation = current_user.reservations.find(params[:id])
    @reservation.destroy
    render :show
  end

  private

  def reservation_params
    params.require(:reservation).permit(:user_id, :treat_id, :time, :date)
  end

end
