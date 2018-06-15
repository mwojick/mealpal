import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Account from './account';
import { updateUser } from '../../actions/user_actions';


const msp = ({entities:
  {users, treats, shops, cities, favorites, reservations},
  session, errors, ui}) => {

 return {
    currentUser: users[session.id],
    errors: errors.users
  };
};

const mdp = (dispatch) => {
 return {
   updateUser: (user) => dispatch(updateUser(user))
 };
};

export default withRouter(connect(msp, mdp)(Account));
