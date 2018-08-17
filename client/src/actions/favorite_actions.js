import * as favoriteApiUtil from '../util/favorite_api_util';

export const RECEIVE_FAVORITE = "RECEIVE_FAVORITE";
export const RECEIVE_ALL_FAVORITES = "RECEIVE_ALL_FAVORITES";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const RECEIVE_FAV_ERRORS = "RECEIVE_FAV_ERRORS";


export const fetchFavorites = () => dispatch => {
  return favoriteApiUtil.fetchFavorites().then((favS) => {
    return dispatch(receiveAllFavorites(favS));
  }, (errors) => dispatch(receiveErrors(errors.responseJSON)));
};

export const createFavorite = (fav) => dispatch => {
  return favoriteApiUtil.createFavorite(fav).then((favS) => {
    return dispatch(receiveFavorite(favS));
  }, (errors) => dispatch(receiveErrors(errors.responseJSON)));
};

export const deleteFavorite = (id) => dispatch => {
  return favoriteApiUtil.deleteFavorite(id).then((favS) => {
    return dispatch(removeFavorite(favS.id));
  }, (errors) => dispatch(receiveErrors(errors.responseJSON)));
};

const receiveAllFavorites = (favs) => {
  return {
    type: RECEIVE_ALL_FAVORITES,
    favs
  };
};

const receiveFavorite = (fav) => {
  return {
    type: RECEIVE_FAVORITE,
    fav
  };
};

const removeFavorite = (id) => {
  return {
    type: REMOVE_FAVORITE,
    favId: id
  };
};

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_FAV_ERRORS,
    errors
  };
};
