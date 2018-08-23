import axios from "axios";

export const fetchTreats = city => {
  return axios({
    method: "GET",
    url: `/api/treats`,
    params: { city }
  });
};

export const searchTreats = search => {
  return axios({
    method: "GET",
    url: `/api/treats/search`,
    params: {
      city: search.city,
      search: search.search,
      bounds: search.bounds
    }
  });
};
