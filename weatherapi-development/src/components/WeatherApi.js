import { WaterDamageTwoTone } from "@mui/icons-material";
import axios from "axios";
import "./WeatherApi.css";

/**
 * The variable for our API url with a specific long and lat.
 */
const urlPath =
  "https://api.openweathermap.org/data/2.5/weather?lat=57.700054975231886&lon=11.965259019774122&appid=5cde6ed5653138cdcd61752763393ab2&units=metric";

/**
 * Here we make our API GET request for the weather today.
 */
const getTodayWeather = (url) => {
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

/**
 * Function were we are creating the object we want.
 */
export async function apiCallWeatherToday() {
  let tmp = getTodayWeather(urlPath);
  Promise.resolve(tmp).then((value) => {
    let weatherObj = new TodayWeather(
      value.coord.lat,
      value.coord.lon,
      value.main.temp,
      value.weather[0].main,
      value.weather[0].description,
      "Göteborg"
    );
    console.log("The weather object", weatherObj);
    console.log("The value variable", value);
    return weatherObj;
  });
}

/**
 * The class which contains our constructor for our object.
 */
class TodayWeather {
  constructor(
    lat,
    long,
    temp,
    mainDescription,
    secondaryDescription,
    locationName
  ) {
    this.lat = lat;
    this.long = long;
    this.temp = temp;
    this.mainDescription = mainDescription;
    this.secondaryDescription = secondaryDescription;
    this.locationName = locationName;
  }
}
