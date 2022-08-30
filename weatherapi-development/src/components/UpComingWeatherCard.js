import React from "react";
import "./UpComingWeatherCard.css";
import { getTodayWeather } from "./WeatherApi";
import { useState, useEffect } from "react";

/**
 * The variable for our API url for 5 day weather forecast.
 */
const urlPathWeatherForeCast =
  "https://api.openweathermap.org/data/2.5/forecast?lat=57.700054975231886&lon=11.965259019774122&appid=5cde6ed5653138cdcd61752763393ab2&units=metric";

/**
 * Get the hour stamp for the card view.
 * @param {*} list The list from the api call
 * @returns List of timestamps, in string.
 */
function getUpcomingTime(list) {
  const time = [
    list[1].dt_txt.slice(10, 16),
    list[2].dt_txt.slice(10, 16),
    list[3].dt_txt.slice(10, 16),
    list[4].dt_txt.slice(10, 16),
    list[5].dt_txt.slice(10, 16),
  ];
  return time;
}

/**
 * Our function which uses the setData and useEffect to store the api call
 * iconurl for the icons, concating the url with the iconid to match url src path.
 * upComingTime variabel used to store the time to display
 * @returns The card component used to view the upcoming weather, 3-hour interval.
 */
export default function UpComingWeatherCard() {
  const [result, setData] = useState();
  const iconUrl = "http://openweathermap.org/img/wn/";
  let upComingTime = undefined;

  useEffect(() => {
    getTodayWeather(urlPathWeatherForeCast).then((result) => setData(result));
  }, []);

  if (result !== undefined) {
    upComingTime = getUpcomingTime(result.list);
  }

  return (
    <div>
      <div className="cardHours">
        <div className="upcoming">
          {upComingTime ? upComingTime[0] : ""}{" "}
          ................................................
          <img
            src={
              result
                ? iconUrl.concat(result.list[1].weather[0].icon, "@2x.png")
                : ""
            }
            className="icon"
            alt=""
          />
          {result ? Math.round(result.list[1].main.temp) : ""} °C
        </div>
        <div className="upcoming">
          {upComingTime ? upComingTime[1] : ""}{" "}
          ................................................
          <img
            src={
              result
                ? iconUrl.concat(result.list[2].weather[0].icon, "@2x.png")
                : ""
            }
            className="icon"
            alt=""
          />
          {result ? Math.round(result.list[2].main.temp) : ""} °C
        </div>
        <div className="upcoming">
          {upComingTime ? upComingTime[2] : ""}{" "}
          ................................................
          <img
            src={
              result
                ? iconUrl.concat(result.list[3].weather[0].icon, "@2x.png")
                : ""
            }
            className="icon"
            alt=""
          />
          {result ? Math.round(result.list[3].main.temp) : ""} °C
        </div>
        <div className="upcoming">
          {upComingTime ? upComingTime[3] : ""}{" "}
          ................................................
          <img
            src={
              result
                ? iconUrl.concat(result.list[4].weather[0].icon, "@2x.png")
                : ""
            }
            className="icon"
            alt=""
          />
          {result ? Math.round(result.list[4].main.temp) : ""} °C
        </div>
        <div className="upcoming">
          {upComingTime ? upComingTime[4] : ""}{" "}
          ................................................
          <img
            src={
              result
                ? iconUrl.concat(result.list[5].weather[0].icon, "@2x.png")
                : ""
            }
            className="icon"
            alt=""
          />
          {result ? Math.round(result.list[5].main.temp) : ""} °C
        </div>
      </div>
    </div>
  );
}
