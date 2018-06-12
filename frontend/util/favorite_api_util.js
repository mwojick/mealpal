export const fetchFavorites = () => {
  return $.ajax({
    method: "GET",
    url: `/api/favorites`
  });
};

export const createFavorite = (favorite) => {
  return $.ajax({
    method: "POST",
    url: `/api/favorites`,
    data: { favorite: {
        user_id: favorite.userId,
        shop_id: favorite.shopId
      }
    }
  });
};

export const deleteFavorite = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/favorites/${id}`
  });
};
