import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth/AuthContext";

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const [state] = useState({
    logo: "assets/images/logo.svg",
  });

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

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
        {user && (
          <div className="nav__buttons__outs">
            <span className="nav__buttons__outs-name">
              Welcome back : {user.firstname}
            </span>
            <button
              onClick={handleLogout}
              className="nav__list__buttons-register"
            >
              Log out
            </button>
          </div>
        )}

        {!user && (
          <Link className="nav__list__buttons-register" to="/register">
            Register
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
