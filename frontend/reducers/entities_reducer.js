import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import treatReducer from './treat_reducer';
import shopReducer from './shop_reducer';
import cityReducer from './city_reducer';
import favoriteReducer from './favorite_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  treats: treatReducer,
  shops: shopReducer,
  cities: cityReducer,
  favorites: favoriteReducer
});

export default entitiesReducer;
