import React from 'react';
import { Link, Route, Redirect } from 'react-router-dom';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }

  render() {
    return (
      <div className="nav-menu">

        <div className="nav-menu-button" onClick={() => this.toggleClass()}>
          <img className="hamburger"
            src="https://res.cloudinary.com/mwojick/image/upload/v1528584292/hamburger.png">
          </img>
          MENU
          <ul className={this.state.active ? "dropdown-active animated fadeIn" : "dropdown animated"}>
            <li onClick={() => <Redirect to="/" />}>
              <div><img src="https://res.cloudinary.com/mwojick/image/upload/v1528591565/Moon-512.png"></img>Dessert</div>
            </li>

            <li>
              <div><img src="https://res.cloudinary.com/mwojick/image/upload/v1528590607/profile.png"></img>My Account</div>
            </li>

            <li>
              <div><img src="https://res.cloudinary.com/mwojick/image/upload/v1528592001/favorite.png"></img>Favorites</div>
            </li>

            <li>
              <div><img src="https://res.cloudinary.com/mwojick/image/upload/v1528591997/history.png"></img>History</div>
            </li>

            <li onClick={()=>this.props.logout()} className="menu-logout">
              <div><img src="https://res.cloudinary.com/mwojick/image/upload/v1528590545/logout.png"></img>Logout</div>
            </li>

          </ul>
        </div>
        <div className="login-link">
          <Link to='/login' onClick={()=>this.props.logout()}>
            LOGOUT
          </Link>
        </div>
      </div>
    );
  }
}

export default Menu;
