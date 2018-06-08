import { connect } from 'react-redux';
import { fetchTreats, searchTreats } from '../../actions/treat_actions';
import { withRouter } from 'react-router-dom';
import Greeting from './greeting';

const msp = (state) => {
  return {
  };
};

const mdp = (dispatch) => {
  return {
  };
};

export default withRouter(connect(msp, mdp)(Greeting));
