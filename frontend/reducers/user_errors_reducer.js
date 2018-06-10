import {
  RECEIVE_USER,
  RECEIVE_USER_ERRORS
} from '../actions/user_actions';

import merge from 'lodash/merge';

const userErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_USER:
      return [];
    case RECEIVE_USER_ERRORS:
      return action.errors;
    default:
      return oldState;
  }
};

export default userErrorsReducer;
