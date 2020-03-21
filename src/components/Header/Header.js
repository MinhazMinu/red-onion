import React from "react";
import logo from "../../logo2.png";
import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <img src={logo} alt="logo" className="logo" />
        <ul className="nav-links">
          <li>
            <a href="/cart">
              <MdShoppingCart />
            </a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/signup">SignUp</a>    
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
