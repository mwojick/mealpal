import { connect } from 'react-redux';
import { fetchTreats, searchTreats } from '../../actions/treat_actions';
import { fetchFavorites } from '../../actions/favorite_actions';
import { changeFilter } from '../../actions/filter_actions';
import { withRouter } from 'react-router-dom';
import Favorites from './favorites';
import { getPreferredCity,
   getFavorites,
   getFavTreats,
   getFavIds } from '../../util/selectors';


const msp = ({entities:
  {users, treats, shops, cities, favorites},
  session, errors, ui}) => {

  let isFav = ui.filters.favorite;

  let favIds = getFavIds(favorites);
  let favs = getFavorites(favorites);
  let treatsFavs = getFavTreats(Object.values(treats), favs, true);

 return {
    currentUser: users[session.id],
    treats: treatsFavs,
    shops: shops,
    favorites: favs,
    favIds: favIds,
    errors: errors.treats,
    loading: ui.loading.searchLoading,
    preferredCity: getPreferredCity(session, users, cities)
  };
};

const mdp = (dispatch) => {
 return {
   changeFilter: (filter, value) => dispatch(changeFilter(filter, value)),
   fetchTreats: (city) => dispatch(fetchTreats(city)),
   fetchFavorites: () => dispatch(fetchFavorites())
 };
};

export default withRouter(connect(msp, mdp)(Favorites));
