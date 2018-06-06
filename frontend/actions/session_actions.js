import * as sessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const signup = (user) => dispatch => {
  return sessionApiUtil.signup(user).then((userS) => {
    return dispatch(receiveCurrentUser(userS));
  }, (errors) => dispatch(receiveErrors(errors.responseJSON)) );
};

export const login = (user) => dispatch => {
  return sessionApiUtil.login(user).then( (userS) => {
    return dispatch(receiveCurrentUser(userS));
  }, (errors) => dispatch(receiveErrors(errors.responseJSON)) );
};

export const logout = () => dispatch => {
  return sessionApiUtil.logout().then(() => {
    return dispatch(logoutCurrentUser());
  }, (errors) => dispatch(receiveErrors(errors.responseJSON)) );
};

const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  };
};

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const clearErrors = () => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors: []
  };
};
