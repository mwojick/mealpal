import $ from "jquery";

export const fetchCities = () => {
  return $.ajax({
    method: "GET",
    url: `/api/cities`
  });
};
