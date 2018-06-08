import * as treatApiUtil from '../util/treat_api_util';

export const RECEIVE_ALL_TREATS = "RECEIVE_ALL_TREATS";
export const RECEIVE_SEARCH_TREATS = "RECEIVE_SEARCH_TREATS";
export const RECEIVE_TREAT_ERRORS = "RECEIVE_TREAT_ERRORS";

export const fetchTreats = (city) => dispatch => {
  return treatApiUtil.fetchTreats(city).then((treats) => {
    return dispatch(receiveTreats(treats));
  }, (errors) => dispatch(receiveErrors(errors.responseJSON)));
};

export const searchTreats = (search) => dispatch => {
  return treatApiUtil.searcTreats(search).then((treats) => {
    return dispatch(receiveTreats(treats));
  }, (errors) => dispatch(receiveErrors(errors.responseJSON)));
};


const receiveTreats = (treats) => {
  return {
    type: RECEIVE_ALL_TREATS,
    treats
  };
};

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_TREAT_ERRORS,
    errors
  };
};
