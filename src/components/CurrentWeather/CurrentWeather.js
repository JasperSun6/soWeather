import React from "react";
import "./CurrentWeather.css";
import locationIcon from "../../assets/location.png";

function CurrentWeather({ weatherData, locationData }) {
  if (Object.keys(weatherData).length > 0) {
    return (
      <div>
        <div className="address">
          <img src={locationIcon} className="locationIcon" alt="location" />
          <p>{locationData}</p>
        </div>
        <div className="weatherCard">
          <div className="weather">
            <div className="temps">
              <p className="temp">
                {Math.round(weatherData.current.temp.toFixed())} °C
              </p>
              <p className="feelTemp">
                Feels like:{" "}
                {Math.round(weatherData.current.feels_like.toFixed())} °C{" "}
              </p>
            </div>
            <div className="weatherDes">
              <img
                className="weatherIcon"
                src={`http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`}
                alt="icon"
              />
              <p className="tempDes">
                {weatherData.current.weather[0].description
                  .charAt(0)
                  .toUpperCase() +
                  weatherData.current.weather[0].description.slice(1)}
              </p>
            </div>
          </div>
          <div className="humWind">
            <p>Humidity: {weatherData.current.humidity} %</p>
            <p>Wind Speed: {weatherData.current.wind_speed} m/s </p>
          </div>

          <div className="sun">
            <p>
              Sunrise:{" "}
              {new Date(
                weatherData.current.sunrise * 1000
              ).toLocaleTimeString()}
            </p>
            <p>
              Sunset:{" "}
              {new Date(weatherData.current.sunset * 1000).toLocaleTimeString()}
            </p>
          </div>
        </div>
      </div>
    );
  } else return;
}

export default CurrentWeather;
