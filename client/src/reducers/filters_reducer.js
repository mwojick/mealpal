import {
  UPDATE_FILTER,
  RESET_FILTER
} from '../actions/filter_actions';

const defaultState = {
  'center': false,
  'favorite': false,
  'restoday': [],
  'bounds': {},
  'search': '',
  'marker': null
};

const filtersReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case UPDATE_FILTER:
      return Object.assign({}, state, { [action.filter]: action.value });
    case RESET_FILTER:
      return Object.assign({}, state, action.value);
    default:
      return state;
  }
};

export default filtersReducer;
