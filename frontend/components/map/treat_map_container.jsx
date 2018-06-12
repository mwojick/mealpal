import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';
import TreatMap from './treat_map';
import { updateFilter, changeFilter } from '../../actions/filter_actions';
import { getPreferredCity } from '../../util/selectors';

const msp = ({entities: {users, treats, shops, cities}, session, ui}) => {

  return {
    treats: Object.values(treats),
    shops: shops,
    preferredCity: getPreferredCity(session, users, cities),
    center: ui.filters.center
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
