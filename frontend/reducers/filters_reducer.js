import {
  UPDATE_FILTER
} from '../actions/filter_actions';
import merge from 'lodash/merge';

const defaultState = {
  'center': false,
  'favorite': false,
  'restoday': false
};

const filtersReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case UPDATE_FILTER:
      return Object.assign({}, state, { [action.filter]: action.value });
    default:
      return state;
  }
};

export default filtersReducer;
