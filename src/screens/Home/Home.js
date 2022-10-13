import "./Home.css";
import CurrentWeather from "../../components/CurrentWeather/CurrentWeather";
import Loader from "../../components/Loader/Loader";

function Home({ weatherData, locationData, loading }) {
  return (
    <div className="Home">
      <div className="main">
        <Loader loading={loading} />
        <p>Welcome to the soWeather!</p>
        <p>Search for your location to get your weather</p>
        <p>Current location weather</p>
      </div>
      <CurrentWeather weatherData={weatherData} locationData={locationData} />
    </div>
  );
}

export default Home;
