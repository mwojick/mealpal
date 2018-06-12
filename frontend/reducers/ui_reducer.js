import { combineReducers } from 'redux';
import merge from 'lodash/merge';

import loadingReducer from './loading_reducer';
import filtersReducer from './filters_reducer';

const uiReducer = combineReducers({
  loading: loadingReducer,
  filters: filtersReducer
});

export default uiReducer;
