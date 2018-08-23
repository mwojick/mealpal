import axios from "axios";

export const fetchFavorites = () => {
  return axios({
    method: "GET",
    url: `/api/favorites`
  });
};

export const createFavorite = favorite => {
  return axios({
    method: "POST",
    url: `/api/favorites`,
    data: {
      favorite: {
        user_id: favorite.userId,
        shop_id: favorite.shopId
      }
    }
  });
};

export const deleteFavorite = id => {
  return axios({
    method: "DELETE",
    url: `/api/favorites/${id}`
  });
};
