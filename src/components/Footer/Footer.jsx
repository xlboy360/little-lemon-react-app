import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";
import logo from "../../assets/logo.svg";

function Footer() {
  return (
    <footer>
      <img src={logo} alt="Little Lemon Logo" />
      <div className="footer-column">
        <h4 className="green-text">Navigation</h4>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="">ABOUT</Link>
          </li>
          <li>
            <Link to="">MENU</Link>
          </li>
          <li>
            <Link to="">RESERVATIONS</Link>
          </li>
          <li>
            <Link to="">ORDE R ONLINE</Link>
          </li>
          <li>
            <Link to="">LOGI N</Link>
          </li>
        </ul>
      </div>
      <div className="footer-column">
        <h4 className="green-text">Contact</h4>
        <ul>
          <li>Mexico CDMX Iztapalapa 09780</li>
          <li>555-154-6514</li>
        </ul>
      </div>
      <div className="footer-column">
        <h4 className="green-text">Social Media Links</h4>
        <ul>
          <li>FB</li>
          <li>In</li>
          <li>Tiktok</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
