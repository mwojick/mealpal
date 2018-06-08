import { connect } from 'react-redux';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavLogin from './nav_login';
import { login } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {

  let logInSignUp;
  if (ownProps.location.pathname === '/signup') {
    logInSignUp = <Link to='/login'>LOG IN</Link>;
  } else {
    logInSignUp = <Link to='/signup'>SIGN UP</Link>;
  }

  return {
    demoUser: {
      email: 'demo',
      password: 123456
    },
    logInSignUp: logInSignUp
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(login(user))
  };
};

export default withRouter(connect(mapStateToProps,
   mapDispatchToProps)(NavLogin));
