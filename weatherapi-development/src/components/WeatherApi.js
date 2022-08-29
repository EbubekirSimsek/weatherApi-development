import axios from "axios";
import "./WeatherApi.css";

/**
 * The variable for our API url with a specific long and lat.
 */
export const urlPath =
  "https://api.openweathermap.org/data/2.5/weather?lat=57.700054975231886&lon=11.965259019774122&appid=5cde6ed5653138cdcd61752763393ab2&units=metric";

/**
 * Here we make our API GET request for the weather today.
 */
export const getTodayWeather = (url) => {
  return (
    axios
      .get(url)
      .then((res) => {
        let weatherT = res.data;
        return weatherT;
      })
      // Error handling
      .catch((error) => {
        throw error;
      })
  );
};
