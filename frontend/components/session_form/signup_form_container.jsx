import { connect } from 'react-redux';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { signup, clearErrors } from '../../actions/session_actions';
import { fetchCities } from '../../actions/city_actions';
import SignupForm from './signup_form';

const mapStateToProps = (state) => {
  return {
    cities: Object.values(state.entities.cities),
    errors: state.errors.session,
    formType: 'SIGN UP',
    navLink: <Link to="/login">Log In!</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    fetchCities: () => dispatch(fetchCities()),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SignupForm));
