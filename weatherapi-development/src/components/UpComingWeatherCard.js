import React from "react";
import "./WeatherCard.css";
import { getTodayWeather } from "./WeatherApi";
import { useState, useEffect } from "react";

/**
 * The variable for our API url for 5 day weather forecast.
 */
const urlPathWeatherForeCast =
  "https://api.openweathermap.org/data/2.5/forecast?lat=57.700054975231886&lon=11.965259019774122&appid=5cde6ed5653138cdcd61752763393ab2&units=metric";

/**
 * Our function which uses the setData and useEffect to store the api call and the weather view.
 */
export default function UpComingWeatherCard() {
  const [result, setData] = useState();
  const iconUrl = "http://openweathermap.org/img/wn/";

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const d = new Date();
  let day = weekday[d.getDay()];

  let day1 = "";
  let day2 = "";
  let day3 = "";
  let day4 = "";
  let day5 = "";

  if (d.getDay() == 2) {
    day1 = weekday[3];
    day2 = weekday[4];
    day3 = weekday[5];
    day4 = weekday[6];
    day5 = weekday[0];
  }

  useEffect(() => {
    getTodayWeather(urlPathWeatherForeCast).then((result) => setData(result));
  }, []);

  console.log(result ? result.list[4] : "");
  /**
   * The body that are displayed.
   */
  return (
    <div>
      <div className="cardDays">
        <div className="upcoming">
          <img
            src={
              result
                ? iconUrl.concat(result.list[4].weather[0].icon, "@2x.png")
                : ""
            }
            className="icon"
          />
          {result ? Math.round(result.list[4].main.temp) : ""} °C
        </div>
        <div className="upcoming">
          <img
            src={
              result
                ? iconUrl.concat(result.list[12].weather[0].icon, "@2x.png")
                : ""
            }
            className="icon"
          />
          {result ? Math.round(result.list[12].main.temp) : ""} °C
        </div>
        <div className="upcoming">
          <img
            src={
              result
                ? iconUrl.concat(result.list[20].weather[0].icon, "@2x.png")
                : ""
            }
            className="icon"
          />
          {result ? Math.round(result.list[20].main.temp) : ""} °C
        </div>
        <div className="upcoming">
          Monday ........................
          <img
            src={
              result
                ? iconUrl.concat(result.list[28].weather[0].icon, "@2x.png")
                : ""
            }
            className="icon"
          />
          {result ? Math.round(result.list[28].main.temp) : ""} °C
        </div>
        <div className="upcoming">
          <img
            src={
              result
                ? iconUrl.concat(result.list[36].weather[0].icon, "@2x.png")
                : ""
            }
            className="icon"
          />
          {result ? Math.round(result.list[36].main.temp) : ""} °C
        </div>
      </div>
    </div>
  );
}
