import { searchTreats } from './treat_actions';

export const UPDATE_FILTER = "UPDATE_FILTER";
export const RESET_FILTER = "RESET_FILTER";

export const resetCenter = () => {
  return {
    type: RESET_FILTER,
    value: {
      'center': true
    }
  };
};

export const resetFilter= () => {
  return {
    type: RESET_FILTER,
    value: {
      'center': true,
      'favorite': false,
      'search': ''
    }
  };
};

export const resetFilterSearch = () => {
  return {
    type: RESET_FILTER,
    value: {
      'favorite': false,
      'search': ''
    }
  };
};
//
// export const resetFilter = (dispatch) => {
//   dispatch(resetFilterSearch);
//   dispatch(resetCenter);
// };


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
    bounds: bounds,
    city: city,
    search: search
  })(dispatch);
};
