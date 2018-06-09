import { connect } from 'react-redux';
import { fetchTreats, searchTreats } from '../../actions/treat_actions';
import { withRouter } from 'react-router-dom';
import Greeting from './greeting';

const msp = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    loading: state.ui.loading
  };
};

const mdp = (dispatch) => {
  return {
    fetchTreats: (city) => dispatch(fetchTreats(city))
  };
};

export default withRouter(connect(msp, mdp)(Greeting));
