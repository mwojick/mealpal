import { connect } from 'react-redux';
import { updateUser } from '../../actions/user_actions';
import { searchTreats } from '../../actions/treat_actions';
import { withRouter } from 'react-router-dom';
import Search from './search';

const msp = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    cities: Object.values(state.entities.cities)
  };
};

const mdp = (dispatch) => {
  return {
    updateUser: (user) => dispatch(updateUser(user)),
    searchTreats: (search) => dispatch(searchTreats(search))
  };
};

export default withRouter(connect(msp, mdp)(Search));
