import React from 'react';

// import Favorite from '../../img/menu_icons/favorite.png'

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      disabled: false
    };
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    this.setState({ disabled: false});
  }

  handleLogout() {
    this.setState({ disabled: true }, () => this.props.logout());
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
            src="https://res.cloudinary.com/mwojick/image/upload/v1528584292/TreatPal/icons/hamburger.png">
          </img>
          MENU
          <ul className={this.state.active ? "dropdown-active animated fadeIn" : "dropdown animated"}>
            <li onClick={() => this.props.history.push('/')}>
              <div><img src="https://res.cloudinary.com/mwojick/image/upload/v1528591565/TreatPal/icons/Moon-512.png"></img>Dessert</div>
            </li>

            <li onClick={() => this.props.history.push('/account')}>
              <div><img src="https://res.cloudinary.com/mwojick/image/upload/v1533677351/TreatPal/icons/profile2.png"></img>My Account</div>
            </li>

            <li onClick={() => this.props.history.push('/favorites')}>
              <div><img src="https://res.cloudinary.com/mwojick/image/upload/v1532988683/TreatPal/icons/favorite2.png"></img>Favorites</div>
            </li>

            <li onClick={() => this.props.history.push('/history')}>
              <div><img src="https://res.cloudinary.com/mwojick/image/upload/v1533677351/TreatPal/icons/history2.png"></img>History</div>
            </li>

            <li onClick={this.handleLogout} className="menu-logout">
              <div><img src="https://res.cloudinary.com/mwojick/image/upload/v1528590545/TreatPal/icons/logout.png"></img>Logout</div>
            </li>

          </ul>
        </div>
        <div className="login-link">
          <div onClick={this.handleLogout}>
            LOGOUT
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
