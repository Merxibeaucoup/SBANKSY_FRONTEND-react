import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [state] = useState({
    logo: "assets/images/logo.svg",
  });
  return (
    <nav className="nav">
      <div className="nav__logo">
        <img src={state.logo} alt={state.logo} />
      </div>

      <ul className="nav__list__items">
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
        <li>
          <Link to="/careers">Careers</Link>
        </li>
      </ul>

      <div className="nav__list__buttons">
        <Link className="nav__list__buttons-register" to="/register">
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
