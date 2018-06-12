
export const fetchTreats = (city) => {
  return $.ajax({
    method: "GET",
    url: `/api/treats`,
    data: { city }
  });
};

export const searchTreats = (search) => {
  return $.ajax({
    method: "GET",
    url: `/api/treats/search`,
    data: {
      city: search.city,
      search: search.search,
      bounds: search.bounds
    }
  });
};
