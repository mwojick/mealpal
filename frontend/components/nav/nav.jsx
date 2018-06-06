import React from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import { NavRoute } from '../../util/route_util';
import Menu from './menu';

const Nav = () => (
  <div className="nav-main">
    <div className="nav-logo">
      <Link to="/"> <span>TREAT<strong>PAL</strong></span> </Link>
    </div>

    <div className="nav-route">
      <NavRoute menu={Menu} />
    </div>

  </div>
);

export default Nav;
