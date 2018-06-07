import React from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import { NavRoute } from '../../util/route_util';

const Nav = () => (
  <div className="nav-main">
    <div className="nav-logo">
      <Link to="/"> <span>TREAT<strong>PAL</strong></span> </Link>
    </div>

    <div className="nav-route">
      <NavRoute />
    </div>

  </div>
);

export default Nav;
