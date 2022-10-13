import { getForecast } from "./Weather.service";
const API_TOKEN = "pk.79bb52c4646b09c612d84ad015d54aa5";
const BASE_URL = "https://us1.locationiq.com/v1";

export async function getGeolocation(location) {
  const url = `${BASE_URL}/search.php?key=${API_TOKEN}&q=${location}&format=json`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();

  const WeatherData = await getForecast({
    coord: { lon: data[0].lon, lat: data[0].lat },
    units: "metric",
  });

  return { WeatherData, data };
}

export async function getLocation(lat, lon) {
  const url = `${BASE_URL}/reverse.php?key=${API_TOKEN}&lat=${lat}&lon=${lon}&format=json`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();

  const WeatherData = await getForecast({
    coord: { lon, lat },
    units: "metric",
  });

  return { data, WeatherData };
}
