import React from "react";
import "./WeatherCard.css";
import { apiCallWeatherToday } from "./WeatherApi";

const current = new Date();
const date = `${current.getDate()} ${current.toLocaleString("en-us", {
  month: "long",
})} ${current.getFullYear()}`;

const weatherObject = apiCallWeatherToday();

export default function WeatherCard() {
  return (
    <div className="card">
      <div className="city"> Test</div>
      <div className="date">{date} </div>
      <div className="weather">
        <div className="sun">
          <div className="temp"> 28°C</div>
        </div>
      </div>
    </div>
  );
}
