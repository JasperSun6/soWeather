import React from "react";
import "./DailyCard.css";
import locationIcon from "../../assets/location.png";

function DailyCard({ weatherData, locationData }) {
  if (Object.keys(weatherData).length > 0) {
    return (
      <>
        <div className="address">
          <img src={locationIcon} className="locationIcon" alt="location" />
          <p>{locationData}</p>
        </div>
        <div className="dailyCards">
          {weatherData.daily.map((day, i) => {
            if (i < 6) {
              return (
                <div key={i} className="dailyCard">
                  <div className="dateTime">
                    <p className="date">
                      {new Date(day.dt * 1000).getDate()}
                      {"/"}
                      {new Date(day.dt * 1000).getMonth() + 1}
                      {"/"}
                      {new Date(day.dt * 1000).getFullYear()}
                    </p>
                    <p className="time">
                      {new Date(day.dt * 1000).toLocaleString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>

                  <div className="dayNightTemp">
                    <p> Day feels like: {Math.round(day.feels_like.day)} °C </p>
                    <p>
                      {" "}
                      Night feels like: {Math.round(
                        day.feels_like.night
                      )} °C{" "}
                    </p>
                  </div>
                  <div className="weatherDes">
                    <img
                      className="weatherIcon"
                      src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                      alt="icon"
                    />
                    <p className="tempDes">
                      {day.weather[0].description.charAt(0).toUpperCase() +
                        day.weather[0].description.slice(1)}
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

export default DailyCard;
