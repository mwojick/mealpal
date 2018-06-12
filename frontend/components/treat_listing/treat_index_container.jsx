import { connect } from 'react-redux';
import { fetchTreats, searchTreats } from '../../actions/treat_actions';
import { changeFilter } from '../../actions/filter_actions';
import { withRouter } from 'react-router-dom';
import TreatIndex from './treat_index';
import { getPreferredCity,
   getFavorites,
   getFavTreats } from '../../util/selectors';

const msp = ({entities:
  {users, treats, shops, cities, favorites},
  session, errors, ui, filters}) => {

  let isFav = filters ? filters.favorite : false;

  let favs = getFavorites(favorites);
  let treatsFavs = getFavTreats(Object.values(treats), favs, isFav);

  return {
    currentUser: users[session.id],
    treats: treatsFavs,
    shops: shops,
    favorites: favs,
    errors: errors.treats,
    loading: ui.loading.searchLoading,
    preferredCity: getPreferredCity(session, users, cities)
  };
};

const mdp = (dispatch) => {
  return {
    changeFilter: (filter, value) => dispatch(changeFilter(filter, value))
  };
};

export default withRouter(connect(msp, mdp)(TreatIndex));
