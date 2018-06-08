import { connect } from 'react-redux';
import { fetchTreats, searchTreats } from '../../actions/treat_actions';
import { withRouter } from 'react-router-dom';
import Greeting from './greeting';

const msp = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    treats: state.entities.treats,
    shops: state.entities.shops,
    cities: state.entities.cities,
    errors: state.errors.treats
  };
};

const mdp = (dispatch) => {
  return {
    fetchTreats: (city) => dispatch(fetchTreats(city)),
    searchTreats: (search) => dispatch(searchTreats(search)),
  };
};

export default withRouter(connect(msp, mdp)(Greeting));
