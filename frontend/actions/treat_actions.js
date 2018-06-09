import * as treatApiUtil from '../util/treat_api_util';

export const RECEIVE_ALL_TREATS = "RECEIVE_ALL_TREATS";
export const RECEIVE_SEARCH_TREATS = "RECEIVE_SEARCH_TREATS";
export const RECEIVE_TREAT_ERRORS = "RECEIVE_TREAT_ERRORS";

export const START_LOADING_ALL_TREATS = "START_LOADING_ALL_TREATS";
export const START_LOADING_SEARCH_TREATS = "START_LOADING_SEARCH_TREATS";

export const fetchTreats = (city) => dispatch => {
  dispatch(startLoadingAllTreats());
  return treatApiUtil.fetchTreats(city).then((payload) => {
    return dispatch(receiveTreats(payload));
  }, (errors) => dispatch(receiveErrors(errors.responseJSON)));
};

//search = {city, query}
export const searchTreats = (search) => dispatch => {
  dispatch(startLoadingSearchTreats());
  return treatApiUtil.searchTreats(search).then((payload) => {
    return dispatch(receiveTreatsSearch(payload));
  }, (errors) => dispatch(receiveErrors(errors.responseJSON)));
};


const receiveTreats = (payload) => {
  return {
    type: RECEIVE_ALL_TREATS,
    payload
  };
};

const receiveTreatsSearch = (payload) => {
  return {
    type: RECEIVE_SEARCH_TREATS,
    payload
  };
};

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_TREAT_ERRORS,
    errors
  };
};

export const startLoadingAllTreats = () => ({
  type: START_LOADING_ALL_TREATS
});

export const startLoadingSearchTreats = () => ({
  type: START_LOADING_SEARCH_TREATS
});
