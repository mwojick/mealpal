import {
  RECEIVE_ALL_CITIES
} from '../actions/city_actions';

import merge from 'lodash/merge';

const cityReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);
  switch (action.type) {
    case RECEIVE_ALL_CITIES:
      return action.cities;
    default:
      return oldState;
  }
};

export default cityReducer;
