
import {
  RECEIVE_ALL_TREATS,
  RECEIVE_SEARCH_TREATS,
  RECEIVE_TREAT_ERRORS,
  START_LOADING_ALL_TREATS,
  START_LOADING_SEARCH_TREATS
} from '../actions/treat_actions';

const initialState = {
  fetchLoading: false,
  searchLoading: false
};

const loadingReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_TREATS:
      return Object.assign({}, state, { fetchLoading: false });
    case RECEIVE_SEARCH_TREATS:
      return Object.assign({}, state, { searchLoading: false });
    case RECEIVE_TREAT_ERRORS:
      return Object.assign({}, state,
        {fetchLoading: false, searchLoading: false });
    case START_LOADING_ALL_TREATS:
      return Object.assign({}, state, { fetchLoading: true });
    case START_LOADING_SEARCH_TREATS:
      return Object.assign({}, state, { searchLoading: true });
    default:
      return state;
  }
};

export default loadingReducer;
