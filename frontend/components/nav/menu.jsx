import React from 'react';
import { Link, Route, Redirect } from 'react-router-dom';

const Menu = (props) => {
  return (
    <div className="nav-menu">
      <div>
        MENU
      </div>
      <div>
        <Link to='/login' onClick={()=>props.logout()}>
          LOGOUT
        </Link>
      </div>
    </div>
  );
};

export default Menu;
