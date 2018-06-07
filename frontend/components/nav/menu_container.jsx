import { connect } from 'react-redux';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Menu from './menu';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default withRouter(connect(mapStateToProps,
   mapDispatchToProps)(Menu));
