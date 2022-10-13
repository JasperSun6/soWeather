import React from "react";
import "./DailyWeather.css";
import DailyCard from "../../components/DailyCard/DailyCard";
import Loader from "../../components/Loader/Loader";

function DailyWeather({ weatherData, locationData, loading }) {
  return (
    <di className="daily">
      <p>Daily Weather</p>
      <Loader loading={loading} />
      <DailyCard weatherData={weatherData} locationData={locationData} />
    </di>
  );
}

export default DailyWeather;
