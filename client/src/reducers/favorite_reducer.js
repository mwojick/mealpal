import {
  RECEIVE_FAVORITE,
  RECEIVE_ALL_FAVORITES,
  REMOVE_FAVORITE
} from '../actions/favorite_actions';
import merge from 'lodash/merge';

const favoriteReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);
  switch (action.type) {
    case RECEIVE_ALL_FAVORITES:
      return action.favs;
    case RECEIVE_FAVORITE:
      newState[action.fav.id] = action.fav;
      return newState;
    case REMOVE_FAVORITE:
      delete newState[action.favId];
      return newState;
    default:
      return oldState;
  }
};


export default favoriteReducer;
