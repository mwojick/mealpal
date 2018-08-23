import * as sessionApiUtil from "../util/session_api_util";
import { changeFilter } from "./filter_actions";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const signup = user => dispatch => {
  return sessionApiUtil.signup(user).then(
    userS => {
      return dispatch(receiveCurrentUser(userS.data));
    },
    errors => {
      return dispatch(receiveErrors(errors.response.data));
    }
  );
};

export const login = user => dispatch => {
  return sessionApiUtil.login(user).then(
    userS => {
      return dispatch(receiveCurrentUser(userS.data));
    },
    errors => dispatch(receiveErrors(errors.response.data))
  );
};

export const getCurrentUser = () => dispatch => {
  return sessionApiUtil.getCurrentUser().then(
    userS => {
      dispatch(receiveCurrentUser(userS.data));
      dispatch(changeFilter("fetchedUser", true));
    },
    errors => dispatch(receiveErrors(errors.response.data))
  );
};

export const logout = () => dispatch => {
  return sessionApiUtil.logout().then(
    () => {
      return dispatch(logoutCurrentUser());
    },
    errors => dispatch(receiveErrors(errors.response.data))
  );
};

const receiveCurrentUser = user => {
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

const receiveErrors = errors => {
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

let demoUser = {
  email: "demo",
  password: 123456
};

// export const typeWriter = (state, setState) => {
//
//   let speed = 50;
//
//   let keys = Object.keys(demoUser);
//   let values = Object.values(demoUser).map((v)=>String(v));
//
//   for (let i = 0; i < keys.length; i++) {
//     let word = '';
//     for (let j = 0; j < values[i].length; j++) {
//       word += values[i][j];
//       state[keys[i]].setState({[keys[i]]: word});
//       setTimeout(typeWriter(state, setState), speed);
//     }
//   }
// };

export const demo = () => {
  return login(demoUser);
};

// export const demoLogin = (state, setState) {
//
// }
