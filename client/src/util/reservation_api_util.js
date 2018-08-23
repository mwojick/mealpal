import axios from "axios";

export const fetchReservations = () => {
  return axios({
    method: "GET",
    url: `/api/reservations`
  });
};

export const createReservation = reservation => {
  return axios({
    method: "POST",
    url: `/api/reservations`,
    data: {
      reservation: {
        user_id: reservation.userId,
        treat_id: reservation.treatId,
        time: reservation.time
      }
    }
  });
};

export const updateReservation = reservation => {
  return axios({
    method: "PATCH",
    url: `/api/reservations/${reservation.id}`,
    data: {
      reservation: {
        user_id: reservation.userId,
        treat_id: reservation.treatId,
        time: reservation.time
      }
    }
  });
};

export const deleteReservation = id => {
  return axios({
    method: "DELETE",
    url: `/api/reservations/${id}`
  });
};
