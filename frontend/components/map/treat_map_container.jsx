import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';
import TreatMap from './treat_map';
import { updateFilter, changeFilter } from '../../actions/filter_actions';
import { getPreferredCity } from '../../util/selectors';

import { getFavorites, 
  getFavTreats,
  getFavShops,
  mapShopIdToTreat } from '../../util/selectors';

const msp = ({entities: {users, treats, shops, favorites, cities}, session, ui}) => {

  let isFav = ui.filters.favorite;
  let shopVals = Object.values(shops);
  let treatVals = Object.values(treats);

  if (isFav) {
    let favs = getFavorites(favorites);
    shopVals = getFavShops(shopVals, favs);
    treatVals = getFavTreats(treatVals, favs);
  }

  return {
    treats: mapShopIdToTreat(treatVals),
    shops: shopVals,
    preferredCity: getPreferredCity(session, users, cities),
    center: ui.filters.center,
    search: ui.filters.search,
    marker: ui.filters.marker
  };
};


const mdp = (dispatch) => {
  return {
    updateFilter: (city, search, filter, bounds) =>
     dispatch(updateFilter(city, search, filter, bounds)),
    changeFilter: (filter, value) => dispatch(changeFilter(filter, value))
  };
};

export default withRouter(connect(msp, mdp)(TreatMap));
