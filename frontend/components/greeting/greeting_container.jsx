import { connect } from 'react-redux';
import { fetchTreats, searchTreats } from '../../actions/treat_actions';
import { fetchCities } from '../../actions/city_actions';
import { withRouter } from 'react-router-dom';
import Greeting from './greeting';

const msp = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    loading: state.ui.loading.fetchLoading
  };
};

const mdp = (dispatch) => {
  return {
    fetchTreats: (city) => dispatch(fetchTreats(city)),
    fetchCities: () => dispatch(fetchCities())
  };
};

export default withRouter(connect(msp, mdp)(Greeting));
