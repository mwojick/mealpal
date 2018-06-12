import { connect } from 'react-redux';
import { fetchTreats, searchTreats } from '../../actions/treat_actions';
import { changeFilter } from '../../actions/filter_actions';
import { withRouter } from 'react-router-dom';
import TreatIndex from './treat_index';
import { getPreferredCity } from '../../util/selectors';

const msp = ({entities:
  {users, treats, shops, cities},
  session, errors, ui}) => {
  return {
    currentUser: users[session.id],
    treats: Object.values(treats),
    shops: shops,
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
