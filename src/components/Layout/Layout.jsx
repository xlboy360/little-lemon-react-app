import { Link, Outlet } from "react-router-dom";
import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header";

import "./Layout.css";
import logo from "../../assets/Logo.svg";

function Nav() {
  return (
    <>
      <nav>
        <Link to="/">
          <img src={logo} alt="Little Lemon Logo" />
        </Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="">About</Link>
          </li>
          <li>
            <Link to="">Menu</Link>
          </li>
          <li>
            <Link to="/reservations">Rervations</Link>
          </li>
          <li>
            <Link to="">Order online</Link>
          </li>
          <li>
            <Link to="">Login</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <Footer />
    </>
  );
}

export default Nav;
