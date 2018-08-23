import { connect } from 'react-redux';
// import { fetchTreats, searchTreats } from '../../actions/treat_actions';
import { resetFilter } from '../../actions/filter_actions';
import { withRouter } from 'react-router-dom';
import TreatIndex from './treat_index';
import { 
   getFavorites,
   getFavTreats,
   getFavIds } from '../../util/selectors';

const msp = ({entities:
  {users, treats, shops, favorites},
  session, ui}) => {

  let isFav = ui.filters.favorite;
  let treatVals = Object.values(treats)

  let favIds = getFavIds(favorites);
  let favs = getFavorites(favorites);

  if (isFav) {
    treatVals = getFavTreats(treatVals, favs);
  }


  return {
    currentUser: users[session.id],
    treats: treatVals,
    shops: shops,
    favorites: favs,
    favIds: favIds,
    loading: ui.loading.searchLoading
  };
};

const mdp = (dispatch) => {
  return {
    resetFilter: () => dispatch(resetFilter())
  };
};

export default withRouter(connect(msp, mdp)(TreatIndex));
