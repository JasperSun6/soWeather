import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home/Home";
import DailyWeather from "./screens/DailyWeather/DailyWeather";
import HourlyWeather from "./screens/HourlyWeather/HourlyWeather";
import NotFound from "./screens/NotFound/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Hourly" element={<HourlyWeather />} />
        <Route path="/Daily" element={<DailyWeather />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
