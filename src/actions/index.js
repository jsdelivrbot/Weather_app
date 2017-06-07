import axios from 'axios';

const API_KEY = "1bb534f74c794d1a25f93abfaf1dad34";
const BASE_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${BASE_URL}&q=${city},in`;
  const request = axios.get(url);
  return {
    type    : FETCH_WEATHER,
    payload : request
  }
}
