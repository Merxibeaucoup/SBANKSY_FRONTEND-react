import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav__logo">
        <h1>logo</h1>
      </div>

      <div className="nav__list">
        <div className="nav__list__items">
          <ul className="nav__list__items-ul">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
          </ul>
        </div>
        <div className="nav__list__button">
          <Link className="nav__list__button-register" to="/register">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
