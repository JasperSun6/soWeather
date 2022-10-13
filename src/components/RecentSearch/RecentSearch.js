import React from "react";
import "./RecentSearch.css";
import { getGeolocation } from "../../components/Fetches/Map.service";

function RecentSearch({ setWeatherData, setLocationData, list }) {
  async function handleSearch(item) {
    const location = await getGeolocation(item);
    console.log(location);
    setWeatherData(location.WeatherData);
    setLocationData(location.data[0].display_name);
  }

  if (list.length > 0) {
    return (
      <div className="searches">
        <p>Recent Searches</p>
        <div className="searchList">
          {list.map((item, i) => {
            return (
              <button
                key={i}
                className="historySearch"
                onClick={() => {
                  handleSearch(item);
                }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="searches">
        <p>No recent Search</p>
      </div>
    );
  }
}

export default RecentSearch;
