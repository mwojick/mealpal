
import {
  RECEIVE_ALL_TREATS,
  RECEIVE_SEARCH_TREATS,
  RECEIVE_TREAT_ERRORS,
  START_LOADING_ALL_TREATS,
  START_LOADING_SEARCH_TREATS
} from '../actions/treat_actions';

const loadingReducer = (state = false, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_TREATS:
      return false;
    case RECEIVE_SEARCH_TREATS:
      return false;
    case RECEIVE_TREAT_ERRORS:
      return false;
    case START_LOADING_ALL_TREATS:
      return true;
    case START_LOADING_SEARCH_TREATS:
      return true;
    default:
      return state;
  }
};

export default loadingReducer;
