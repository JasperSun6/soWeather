import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home/Home";
import LocalStorage from "./components/LocalStorage/LocalStorage";
import DailyWeather from "./screens/DailyWeather/DailyWeather";
import HourlyWeather from "./screens/HourlyWeather/HourlyWeather";
import NotFound from "./screens/NotFound/NotFound";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import RecentSearch from "./components/RecentSearch/RecentSearch";
import { getLocation } from "./components/Fetches/Map.service";

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [locationData, setLocationData] = useState({});
  const [loading, setLoading] = useState(false);
  const [list, setList] = LocalStorage("location", []);

  if (list.length === 4) {
    setList(list.shift([0]));
  }

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    setLoading(true);
    navigator.geolocation.getCurrentPosition(async (position) => {
      const forecastData = await getLocation(
        position.coords.latitude,
        position.coords.longitude
      );
      setWeatherData(forecastData.WeatherData);
      setLocationData(
        `${forecastData.data.address.house_number} ${forecastData.data.address.road}, ${forecastData.data.address.city}, ${forecastData.data.address.country}`
      );
      setLoading(false);
    });
  }

  return (
    <>
      <Header
        setWeatherData={setWeatherData}
        setLocationData={setLocationData}
        setLoading={setLoading}
        list={list}
        setList={setList}
      />
      <NavBar />
      <RecentSearch
        setWeatherData={setWeatherData}
        setLocationData={setLocationData}
        list={list}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              weatherData={weatherData}
              locationData={locationData}
              loading={loading}
              setLoading={setLoading}
            />
          }
        />
        <Route
          path="/Hourly"
          element={
            <HourlyWeather
              weatherData={weatherData}
              locationData={locationData}
              loading={loading}
              setLoading={setLoading}
            />
          }
        />
        <Route
          path="/Daily"
          element={
            <DailyWeather
              weatherData={weatherData}
              locationData={locationData}
              loading={loading}
              setLoading={setLoading}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
