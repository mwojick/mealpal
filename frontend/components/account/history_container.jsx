import { connect } from 'react-redux';
import { fetchTreats } from '../../actions/treat_actions';
import { fetchFavorites } from '../../actions/favorite_actions';
import { fetchReservations } from '../../actions/reservation_actions';
import { withRouter } from 'react-router-dom';
import History from './history';
import {
   getFavorites,
   getFavTreats,
   getFavIds,
   getCityReservations
    } from '../../util/selectors';

const msp = ({entities:
  {users, treats, shops, cities, favorites, reservations},
  session, errors, ui}) => {

  let favs = getFavorites(favorites);
  let treatsFavs = getFavTreats(Object.values(treats), favs, true);

  let cityReses = getCityReservations(reservations, treats);

  let favIds = getFavIds(favorites);

 return {
    currentUser: users[session.id],
    treats: treats,
    favIds: favIds,
    cityReses: cityReses,
    shops: shops
  };
};

const mdp = (dispatch) => {
 return {
   fetchTreats: (city) => dispatch(fetchTreats(city)),
   fetchFavorites: () => dispatch(fetchFavorites()),
   fetchReservations: () => dispatch(fetchReservations())
 };
};

export default withRouter(connect(msp, mdp)(History));
