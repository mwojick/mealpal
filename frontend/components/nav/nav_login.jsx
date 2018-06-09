import React from 'react';
import { Link, Route, Redirect } from 'react-router-dom';

class NavLogin extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="nav-login">

        {this.props.logInSignUp}

        <div >
          <Link to='/' onClick={() => this.props.demo()}>
            DEMO
          </Link>
        </div>
      </div>
    );
  }

}


export default NavLogin;
