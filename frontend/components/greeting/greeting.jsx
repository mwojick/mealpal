import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {

  render() {

    const sessionLinks = () => (
      <nav className="login-signup">
        <Link to="/login">Login</Link>
        &nbsp;or&nbsp;
        <Link to="/signup">Sign up!</Link>
      </nav>
    );
    const personalGreeting = () => (
      <hgroup className="header-group">
        <h2 className="header-name">Hi, {this.props.currentUser.email}!</h2>
        <button className="header-button"
          onClick={this.props.logout}>Log Out</button>
      </hgroup>
    );

    return (
      this.props.currentUser ? personalGreeting() : sessionLinks()
    );
  }
}

export default Greeting;
