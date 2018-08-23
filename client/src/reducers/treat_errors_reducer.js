import {
  RECEIVE_ALL_TREATS,
  RECEIVE_SEARCH_TREATS,
  RECEIVE_TREAT_ERRORS
} from '../actions/treat_actions';

const treatErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_TREATS:
      return [];
    case RECEIVE_SEARCH_TREATS:
      return [];
    case RECEIVE_TREAT_ERRORS:
      return action.errors;
    default:
      return oldState;
  }
};

export default treatErrorsReducer;
