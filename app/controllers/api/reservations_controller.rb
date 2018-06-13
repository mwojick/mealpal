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
    date = Date.today + 1
    @reservation = Reservation.new(reservation_params, date: date)

    if @reservation.save
      render :show
    else
      render json: @reservation.errors.full_messages, status: 422
    end

  end

  def update
    @reservation = current_user.reservations.find(params[:id])

    date = Date.today + 1
    if @reservation.update_attributes(reservation_params, date: date)
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
    params.require(:reservation).permit(:user_id, :treat_id, :time)
  end

end
