import React from "react";
import "./WeatherCard.css";
import { getTodayWeather } from "./WeatherApi";
import { useState, useEffect } from "react";
import UpComingWeatherCard from "./UpComingWeatherCard";

/**
 * The variable for our API url for current weather data.
 */
const urlPathWeatherToday =
  "https://api.openweathermap.org/data/2.5/weather?lat=57.700054975231886&lon=11.965259019774122&appid=5cde6ed5653138cdcd61752763393ab2&units=metric";

/**
 * Here are we creating a date object, which has pre-built functions related to date.
 */
const current = new Date();

/**
 * Building our current date using the date object.
 */
const date = `${current.getDate()} ${current.toLocaleString("en-us", {
  month: "long",
})} ${current.getFullYear()}`;

/**
 * The function uses the setData and useEffect to store the api call
 * iconurl for the icons, concating the url with the iconid to match url src path.
 * @returns The card component used to view today weather.
 */
export default function WeatherCard() {
  const [result, setData] = useState();
  const iconUrl = "http://openweathermap.org/img/wn/";

  useEffect(() => {
    getTodayWeather(urlPathWeatherToday).then((result) => setData(result));
  }, []);

  return (
    <div>
      <div className="cardToday">
        <div className="city"> Göteborg </div>
        <div className="date">{date} </div>
        <img
          src={result ? iconUrl.concat(result.weather[0].icon, "@2x.png") : ""}
          alt=""
        />
        <div className="temp">
          {result ? Math.round(result.main.temp) : ""}°C
        </div>
      </div>
      <UpComingWeatherCard />
    </div>
  );
}
