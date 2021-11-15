import React from "react";

import "../styles/nav_bar-styles.css";

function NavBar() {
  return (
    <div class="nav_bar">
      <div clasname="icon_container menu_switch"></div>

      <div className="nav_container">
        <div className="icon_container logo"></div>
        <ul className="menu_items">
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
