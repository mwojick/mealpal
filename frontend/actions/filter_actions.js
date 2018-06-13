import { searchTreats } from './treat_actions';

export const UPDATE_FILTER = "UPDATE_FILTER";

export const changeFilter = (filter, value) => {
  return {
    type: UPDATE_FILTER,
    filter,
    value
  };
};

export const updateFilter = (city, search, filter, bounds) =>
 (dispatch, getState) => {

  dispatch(changeFilter(filter, bounds));

  return searchTreats({
    bounds: getState().ui.filters.bounds,
    city: city,
    search: search
  })(dispatch);
};
