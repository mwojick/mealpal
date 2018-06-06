import { connect } from 'react-redux';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavLogin from './nav_login';
import { login } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    demoUser: {
      email: 'email1',
      password: 123456
    }
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(login(user))
  };
};

export default withRouter(connect(mapStateToProps,
   mapDispatchToProps)(NavLogin));
