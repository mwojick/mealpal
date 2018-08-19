import $ from "jquery";

export const signup = user => {
  return $.ajax({
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
  return $.ajax({
    method: "POST",
    url: `/api/session`,
    data: { user }
  });
};

export const logout = () => {
  return $.ajax({
    method: "DELETE",
    url: `/api/session`
  });
};

export const getCurrentUser = () => {
  return $.ajax({
    method: "GET",
    url: `/api/session/user`
  });
};
