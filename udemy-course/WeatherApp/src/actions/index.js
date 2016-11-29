import axios from 'axios';

const WEATHER_API_KEY = '483dbb92d453ed8da181bc31b331287e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?apikey=${WEATHER_API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  // request is a promise!
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
