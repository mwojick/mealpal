import * as reservationApiUtil from '../util/reservation_api_util';

export const RECEIVE_RESERVATION = "RECEIVE_RESERVATION";
export const RECEIVE_ALL_RESERVATIONS = "RECEIVE_ALL_RESERVATIONS";
export const REMOVE_RESERVATION = "REMOVE_RESERVATION";
export const RECEIVE_RES_ERRORS = "RECEIVE_RES_ERRORS";


export const fetchReservations = () => dispatch => {
  return reservationApiUtil.fetchReservations().then((resS) => {
    return dispatch(receiveAllReservations(resS));
  }, (errors) => dispatch(receiveErrors(errors.responseJSON)));
};

export const createReservation = (res) => dispatch => {
  return reservationApiUtil.createReservation(res).then((resS) => {
    return dispatch(receiveReservation(resS));
  }, (errors) => dispatch(receiveErrors(errors.responseJSON)));
};

export const updateReservation = (res) => dispatch => {
  return reservationApiUtil.updateReservation(res).then((resS) => {
    return dispatch(receiveReservation(resS));
  }, (errors) => dispatch(receiveErrors(errors.responseJSON)));
};

export const deleteReservation = (id) => dispatch => {
  return reservationApiUtil.deleteReservation(id).then((resS) => {
    return dispatch(removeReservation(resS.id));
  }, (errors) => dispatch(receiveErrors(errors.responseJSON)));
};

const receiveAllReservations = (reses) => {
  return {
    type: RECEIVE_ALL_RESERVATIONS,
    reses
  };
};

const receiveReservation = (res) => {
  return {
    type: RECEIVE_RESERVATION,
    res
  };
};

const removeReservation = (id) => {
  return {
    type: REMOVE_RESERVATION,
    resId: id
  };
};

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_RES_ERRORS,
    errors
  };
};
