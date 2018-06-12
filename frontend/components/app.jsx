import React from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import FavoritesContainer from './account/favorites_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Nav from './nav/nav';
import Footer from './footer/footer';

const App = () => (
  <div>
    <header>
      <Nav />
    </header>

    <div className="main-body">
      <main className="main-page">
        <Switch>
          <AuthRoute path="/login" component={LoginFormContainer} />
          <AuthRoute path="/signup" component={SignupFormContainer} />
          <ProtectedRoute path="/favorites" component={FavoritesContainer}/>
          <ProtectedRoute path="/" component={GreetingContainer}/>
        </Switch>
      </main>

      <footer>
        <Footer/>
      </footer>
    </div>
  </div>
);

export default App;
