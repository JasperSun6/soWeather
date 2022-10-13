import React from "react";
import "./Header.css";
import icon from "../../assets/sunny.png";
import { getGeolocation } from "../../components/Fetches/Map.service";

function Header({
  setWeatherData,
  setLocationData,
  setLoading,
  list,
  setList,
}) {
  async function handleSubmit(ev) {
    ev.preventDefault();
    setLoading(true);
    const data = await getGeolocation(ev.target[0].value);
    setWeatherData(data.WeatherData);
    setList(list.concat(ev.target[0].value));
    setLocationData(data.data[0].display_name);
    setLoading(false);
    const input = document.querySelector("input");
    input.value = "";
  }

  return (
    <div className="Header">
      <div className="title">
        <h1>soWeather</h1>
        <img src={icon} alt="weather" />
      </div>
      <form
        className="search"
        onSubmit={(ev) => {
          handleSubmit(ev);
        }}
      >
        <input
          type="text"
          className="input"
          placeholder="Search for location"
        ></input>
        <button className="button">Search</button>
      </form>
    </div>
  );
}

export default Header;
