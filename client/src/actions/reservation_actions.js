import * as reservationApiUtil from "../util/reservation_api_util";
import { changeFilter } from "./filter_actions";

export const RECEIVE_RESERVATION = "RECEIVE_RESERVATION";
export const RECEIVE_ALL_RESERVATIONS = "RECEIVE_ALL_RESERVATIONS";
export const REMOVE_RESERVATION = "REMOVE_RESERVATION";
export const RECEIVE_RES_ERRORS = "RECEIVE_RES_ERRORS";

export const fetchReservations = () => dispatch => {
  return reservationApiUtil.fetchReservations().then(
    resS => {
      return dispatch(receiveAllReservations(resS.data));
    },
    errors => dispatch(receiveErrors(errors.response.data))
  );
};

export const createReservation = res => dispatch => {
  return reservationApiUtil.createReservation(res).then(
    payload => {
      dispatch(changeFilter("restoday", payload.data.res));
      return dispatch(receiveReservation(payload.data));
    },
    errors => dispatch(receiveErrors(errors.response.data))
  );
};

export const updateReservation = res => dispatch => {
  return reservationApiUtil.updateReservation(res).then(
    payload => {
      dispatch(changeFilter("restoday", payload.data.res));
      return dispatch(receiveReservation(payload.data));
    },
    errors => dispatch(receiveErrors(errors.response.data))
  );
};

export const deleteReservation = id => dispatch => {
  dispatch(changeFilter("restoday", []));
  return reservationApiUtil.deleteReservation(id).then(
    payload => {
      return dispatch(removeReservation(payload.data));
    },
    errors => dispatch(receiveErrors(errors.response.data))
  );
};

const receiveAllReservations = reses => {
  return {
    type: RECEIVE_ALL_RESERVATIONS,
    reses
  };
};

const receiveReservation = payload => {
  return {
    type: RECEIVE_RESERVATION,
    res: payload.res,
    user: payload.user
  };
};

const removeReservation = payload => {
  return {
    type: REMOVE_RESERVATION,
    resId: payload.res.id,
    user: payload.user
  };
};

const receiveErrors = errors => {
  return {
    type: RECEIVE_RES_ERRORS,
    errors
  };
};

export const handleReserve = (props, state) => {
  window.scrollTo(0, 0);
  if (props.resToday.constructor !== Array) {
    let newRes = Object.assign({}, props.resToday);
    newRes.treatId = props.treat.id;
    newRes.time = state.seltime;

    props.updateReservation(newRes).then(() => props.openConfirmModal());
  } else {
    let newRes = {
      userId: props.currentUser.id,
      treatId: props.treat.id,
      time: state.seltime
    };
    props.createReservation(newRes).then(() => props.openConfirmModal());
  }
};
