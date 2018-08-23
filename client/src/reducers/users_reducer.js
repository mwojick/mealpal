import {
  RECEIVE_CURRENT_USER
} from '../actions/session_actions';
import {
  RECEIVE_USER
} from '../actions/user_actions';

import {
  RECEIVE_RESERVATION,
  REMOVE_RESERVATION
} from '../actions/reservation_actions';

import merge from 'lodash/merge';

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState[action.user.id] = action.user;
      return newState;
    case RECEIVE_USER:
      newState[action.user.id] = action.user;
      return newState;
    case RECEIVE_RESERVATION:
      newState[action.user.id] = action.user;
      return newState;
    case REMOVE_RESERVATION:
      newState[action.user.id] = action.user;
      return newState;
    default:
      return oldState;
  }
};

export default usersReducer;
