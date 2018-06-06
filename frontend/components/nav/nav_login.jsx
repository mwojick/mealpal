import React from 'react';
import { Link, Route, Redirect } from 'react-router-dom';

class NavLogin extends React.Component {
  constructor(props) {
    super(props);
  }

  demo() {
    this.props.login(this.props.demoUser);
  }

  render() {
    return (
      <div className="nav-login">

        <Link to='/login'>LOG IN</Link>

        <div >
          <Link to='/' onClick={() => this.demo()}>
            DEMO
          </Link>
        </div>
      </div>
    );
  }

}




export default NavLogin;
