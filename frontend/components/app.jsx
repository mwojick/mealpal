import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Nav from './nav/nav';

const App = () => (
  <div>
    <header>
      <Nav />
    </header>

    <main className="main-page">
      <Switch>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <ProtectedRoute path="/" component={GreetingContainer}/>
      </Switch>
    </main>

  </div>
);

export default App;
