import axios from "axios";

export const signup = user => {
  return axios({
    method: "POST",
    url: `/api/users`,
    data: {
      user: {
        email: user.email,
        password: user.password,
        preferred_city: user.preferredCity
      }
    }
  });
};

export const login = user => {
  return axios({
    method: "POST",
    url: `/api/session`,
    data: { user }
  });
};

export const logout = () => {
  return axios({
    method: "DELETE",
    url: `/api/session`
  });
};

export const getCurrentUser = () => {
  return axios({
    method: "GET",
    url: `/api/session/user`
  });
};
