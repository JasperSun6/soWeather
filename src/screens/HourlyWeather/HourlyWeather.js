import "./HourlyWeather.css";
import HourlyCard from "../../components/HourlyCard/HourlyCard";
import Loader from "../../components/Loader/Loader";

function HourlyWeather({ weatherData, locationData, loading }) {
  return (
    <div className="hourly">
      <p>Hourly Weather</p>
      <Loader loading={loading} />
      <HourlyCard weatherData={weatherData} locationData={locationData} />
    </div>
  );
}

export default HourlyWeather;
