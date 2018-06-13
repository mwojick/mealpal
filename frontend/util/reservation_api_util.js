export const fetchReservations = () => {
  return $.ajax({
    method: "GET",
    url: `/api/reservations`
  });
};

export const createReservation = (reservation) => {
  return $.ajax({
    method: "POST",
    url: `/api/reservations`,
    data: { reservation: {
        user_id: reservation.userId,
        treat_id: reservation.treatId,
        time: reservation.time
      }
    }
  });
};

export const updateReservation = (reservation) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/reservations/${reservation.id}`,
    data: { reservation: {
        user_id: reservation.userId,
        treat_id: reservation.treatId,
        time: reservation.time
      }
    }
  });
};

export const deleteReservation = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/reservations/${id}`
  });
};
