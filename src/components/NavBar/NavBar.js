import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav">
      <div className="navBar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Hourly">Hourly</NavLink>
        <NavLink to="/Daily">Daily</NavLink>
      </div>
    </div>
  );
}

export default NavBar;
