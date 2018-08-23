import * as userApiUtil from "../util/user_api_util";

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

export const updateUser = user => dispatch => {
  return userApiUtil.updateUser(user).then(
    usr => {
      return dispatch(receiveUser(usr.data));
    },
    errors => dispatch(receiveErrors(errors.response.data))
  );
};

const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user
  };
};

const receiveErrors = errors => {
  return {
    type: RECEIVE_USER_ERRORS,
    errors
  };
};
