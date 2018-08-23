import {
  RECEIVE_RESERVATION,
  RECEIVE_ALL_RESERVATIONS,
  REMOVE_RESERVATION
} from '../actions/reservation_actions';
import merge from 'lodash/merge';

const reservationReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);
  switch (action.type) {
    case RECEIVE_ALL_RESERVATIONS:
      return action.reses;
    case RECEIVE_RESERVATION:
      newState[action.res.id] = action.res;
      return newState;
    case REMOVE_RESERVATION:
      delete newState[action.resId];
      return newState;
    default:
      return oldState;
  }
};


export default reservationReducer;
