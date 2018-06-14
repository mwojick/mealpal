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

    if current_user.treats_left < 1
      render json: ["No treats left!"], status: 422
    end

    if params[:reservation][:date]
      date = params[:reservation][:date]
    else
      date = Date.today + 1
    end

    time = params[:reservation][:time].to_time

    @reservation = Reservation.new(
      user_id: params[:reservation][:user_id],
      treat_id: params[:reservation][:treat_id],
      time: time,
      date: date
      )

    if @reservation.save
      current_user.update_attributes(treats_left: current_user.treats_left - 1)
      @user = current_user
      render :show
    else
      render json: @reservation.errors.full_messages, status: 422
    end

  end

  def update
    @reservation = current_user.reservations.find(params[:id])

    if params[:reservation][:date]
      date = params[:reservation][:date]
    else
      date = Date.today + 1
    end

    time = params[:reservation][:time].to_time

    if @reservation.update_attributes(
      user_id: params[:reservation][:user_id],
      treat_id: params[:reservation][:treat_id],
      time: time,
      date: date
      )
      render :update
    else
      render json: @reservation.errors.full_messages, status: 422
    end

  end

  def destroy
    @reservation = current_user.reservations.find(params[:id])
    @reservation.destroy
    current_user.update_attributes(treats_left: current_user.treats_left + 1)
    @user = current_user
    render :show
  end

  private

  def reservation_params
    params.require(:reservation).permit(:user_id, :treat_id, :time, :date)
  end

end
