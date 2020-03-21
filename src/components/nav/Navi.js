import React from "react";
import "./navi.css";

const Nav = () => {
  return (
    <div className="navSection">
      <nav>
        <a href="/shop">Shop</a>
        <a href="/review">Order Review</a>
        <a href="/inventory">Manage Inventory</a>
      </nav>
    </div>
  );
};

export default Nav;
