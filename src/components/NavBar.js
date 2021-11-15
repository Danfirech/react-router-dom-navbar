import React from "react";
import { Link } from "react-router-dom";

import "../styles/nav_bar_styles.css";

function NavBar() {
  return (
    <div className="nav_bar">
      <div className="icon_container menu_switch">
        <i className="far fa-circle"></i>
      </div>

      <div className="nav_container">
        <div className="icon_container logo">
          <i className="fas fa-truck"></i>
        </div>
        <ul className="menu_items">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
