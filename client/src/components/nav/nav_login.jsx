import React from "react";

class NavLogin extends React.Component {
  render() {
    return (
      <div className="nav-login">
        {this.props.logInSignUp}

        <div className="demo-button" onClick={() => this.props.demo()}>
          DEMO
        </div>
      </div>
    );
  }
}

export default NavLogin;
