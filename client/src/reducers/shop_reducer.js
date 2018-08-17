import {
  RECEIVE_ALL_TREATS,
  RECEIVE_SEARCH_TREATS,
  RECEIVE_TREAT_ERRORS
} from '../actions/treat_actions';

const shopReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_TREATS:
      return action.payload.shops;
    case RECEIVE_SEARCH_TREATS:
      return action.payload.shops;
    case RECEIVE_TREAT_ERRORS:
      return [];
    default:
      return oldState;
  }
};

export default shopReducer;
