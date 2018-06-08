import {
  RECEIVE_ALL_TREATS,
  RECEIVE_SEARCH_TREATS
} from '../actions/treat_actions';

import merge from 'lodash/merge';

const treatReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);
  switch (action.type) {
    case RECEIVE_ALL_TREATS:
      return action.payload.treats;
    case RECEIVE_SEARCH_TREATS:
      return action.payload.treats;
    default:
      return oldState;
  }
};

export default treatReducer;
