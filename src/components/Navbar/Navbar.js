import React from "react";
import "./Navbar.css";
import { MdShoppingCart } from "react-icons/md";
import logo from "../../asset/logo2.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar navbar-expand navbar-light bg-white my-2">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <ul className="navbar-nav align-items-center justify-content-end">
          <li className="nav-item active">
            <Link to="/cart" className="nav-link">
              <MdShoppingCart />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link to="/signup">
              {" "}
              <button className="btn btn-round">SignUp</button>{" "}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
