import React from "react";
import "./HourlyCard.css";
import locationIcon from "../../assets/location.png";

function HourlyCard({ weatherData, locationData }) {
  if (Object.keys(weatherData).length > 0) {
    return (
      <>
        <div className="address">
          <img src={locationIcon} className="locationIcon" alt="location" />
          <p>{locationData}</p>
        </div>
        <div className="hourlyCards">
          {weatherData.hourly.map((hour, i) => {
            if (i < 6) {
              return (
                <div key={i} className="hourlyCard">
                  <div className="dateTime">
                    <p className="date">
                      {new Date(hour.dt * 1000).getDate()}
                      {"/"}
                      {new Date(hour.dt * 1000).getMonth() + 1}
                      {"/"}
                      {new Date(hour.dt * 1000).getFullYear()}
                    </p>
                    <p className="time">
                      {new Date(hour.dt * 1000).toLocaleString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>

                  <p className="feelTemp">
                    Feels like: {Math.round(hour.feels_like)} °C{" "}
                  </p>
                  <div className="weatherDes">
                    <img
                      className="weatherIcon"
                      src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
                      alt="icon"
                    />
                    <p className="tempDes">
                      {hour.weather[0].description.charAt(0).toUpperCase() +
                        hour.weather[0].description.slice(1)}
                    </p>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </>
    );
  }
}

export default HourlyCard;
