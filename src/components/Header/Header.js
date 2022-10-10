import React from "react";
import "./Header.css";
import icon from "../../assests/sunny.png";

function Header() {
  return (
    <div className="Header">
      <div className="title">
        <h1>Weather App</h1>
        <img src={icon} alt="weather" />
      </div>
      <div className="search">
        <input
          type="text"
          className="input"
          placeholder="Search for location"
        ></input>
        <button className="button">Search</button>
      </div>
    </div>
  );
}

export default Header;
