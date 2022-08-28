import React from "react";
import axios from "axios";
import "./WeatherApi.css";

//The variable for our API url with a specific long and lat.
const urlPath =
  "https://api.openweathermap.org/data/2.5/weather?lat=57.700054975231886&lon=11.965259019774122&appid=5cde6ed5653138cdcd61752763393ab2&units=metric";

//Managing the contact with the API.
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

//A function were we are printing the object, calling this one in weatherApi.
async function printResult() {
  let tmp = getTodayWeather(urlPath);
  Promise.resolve(tmp).then((value) => {
    let weatherObj = new TodayWeather(
      value.coord.lon,
      value.coord.lat,
      value.main.temp,
      value.weather[0].main,
      value.weather[0].description,
      "Göteborg"
    );
    console.log(weatherObj);
  });
}

//The button that calls the function printResult onClick
class WeatherApi extends React.Component {
  render() {
    return (
      <button className="button" onClick={printResult}>
        Tryck här då
      </button>
    );
  }
}

export default WeatherApi;

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
