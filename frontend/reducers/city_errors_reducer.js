import {
  RECEIVE_ALL_CITIES,
  RECEIVE_CITY_ERRORS
} from '../actions/city_actions';

import merge from 'lodash/merge';

const cityErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_CITIES:
      return [];
    case RECEIVE_CITY_ERRORS:
      return action.errors;
    default:
      return oldState;
  }
};

export default cityErrorsReducer;
