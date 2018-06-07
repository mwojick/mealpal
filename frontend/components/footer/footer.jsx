import React from 'react';
import { Link, Route, Redirect } from 'react-router-dom';

const Footer = () => (
  <div className="footer-container">
    <div className="footer-links">
      <a href="#">FAQS</a>
      <span></span>
      <a href="#">HELLO@TREATPAL.COM</a>
      <span></span>
      <a href="#">TERMS OF USE</a>
      <span></span>
      <a href="#">PRIVACY POLICY</a>
      <span></span>
      <a href="#">WE'RE HIRING!</a>
    </div>
    <nav>
      <div>
        &copy; TREATPAL, INC.
      </div>
    </nav>
  </div>
);

export default Footer;
