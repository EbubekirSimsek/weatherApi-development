import React from "react";
import "./WeatherCard.css";
import { getTodayWeather } from "./WeatherApi";
import { urlPath } from "./WeatherApi";

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
    console.log("The temp is ", value.main.temp);
    console.log("The object is", weatherObj);
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

/**
 * Herer are we converting a date to a string by using the current or specified locale.
 */
const current = new Date();
const date = `${current.getDate()} ${current.toLocaleString("en-us", {
  month: "long",
})} ${current.getFullYear()}`;

const tmp = apiCallWeatherToday();
const temp = `${tmp.temp}`;
const location = tmp.locationName;

export default function WeatherCard() {
  return (
    <div>
      <div className="card">
        <div className="city"> Location:{location}</div>
        <div className="date">{date} </div>
        <div className="weather">
          <div className="sun">
            <div className="temp"> {temp} °C</div>
          </div>
        </div>
      </div>
    </div>
  );
}
