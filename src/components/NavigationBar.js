import React from "react";
import { NavLink } from "react-router-dom";
function NavigationBar() {
  const style = {
    fontWeight: "bold"
  };
  return (
    <header className="navbar">
      <nav className="container ">
        <ul className="nav">
          <li>
            <NavLink exact to="/" activeStyle={style}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/catalog" activeStyle={style}>
              Catalog
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/about" activeStyle={style}>
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavigationBar;
