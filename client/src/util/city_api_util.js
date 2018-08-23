import axios from "axios";

export const fetchCities = () => {
  return axios({
    method: "GET",
    url: `/api/cities`
  });
};
