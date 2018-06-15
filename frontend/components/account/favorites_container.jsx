import { connect } from 'react-redux';
import { fetchTreats } from '../../actions/treat_actions';
import { fetchFavorites } from '../../actions/favorite_actions';
import { withRouter } from 'react-router-dom';
import Favorites from './favorites';
import {
   getFavorites,
   getFavTreats
    } from '../../util/selectors';

const msp = ({entities:
  {users, treats, shops, cities, favorites},
  session, errors, ui}) => {

  let favs = getFavorites(favorites);
  let treatsFavs = getFavTreats(Object.values(treats), favs, true);

 return {
    currentUser: users[session.id],
    treats: treatsFavs,
    shops: shops
  };
};

const mdp = (dispatch) => {
 return {
   fetchTreats: (city) => dispatch(fetchTreats(city)),
   fetchFavorites: () => dispatch(fetchFavorites())
 };
};

export default withRouter(connect(msp, mdp)(Favorites));
