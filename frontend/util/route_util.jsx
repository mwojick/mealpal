import React from 'react';
import { Link, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import NavLoginContainer from '../components/nav/nav_login_container';

const Auth = ({component: Component, path, loggedIn, exact}) => (
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )}/>
);

const Protected = ({component: Component, path, loggedIn, exact}) => (
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Redirect to="/login" />
    ) : (
      <Component {...props} />
    )
  )}/>
);

//custom route for nav bar (display menu or login/signup button)
const Nav = ({menu: Menu, path, loggedIn, exact}) => (
  <Route path={path} exact={exact} render={(props) => {

      return !loggedIn ? (
        <NavLoginContainer {...props} />
      ) : (
        <Menu {...props} />
      );
    }
  }/>
);

const mapStateToProps = state => {
  return {loggedIn: Boolean(state.session.id)};
};


export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));

export const ProtectedRoute =
withRouter(connect(mapStateToProps, null)(Protected));

export const NavRoute = withRouter(connect(mapStateToProps, null)(Nav));
