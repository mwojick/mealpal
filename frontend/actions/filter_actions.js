import { searchTreats } from './treat_actions';

export const UPDATE_FILTER = "UPDATE_FILTER";

export const changeFilter = (filter, value) => {
  return {
    type: UPDATE_FILTER,
    filter,
    value
  };
};

export const updateFilter = (city, search, filter, value) =>
 (dispatch, getState) => {

  dispatch(changeFilter(filter, value));


  return searchTreats({
    bounds: getState().ui.filters.bounds,
    city: city,
    search: search
  })(dispatch);
};
