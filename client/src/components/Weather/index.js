import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import "./weather.css";
import CurrentWeather from "./CurrentWeather";
import FiveDayWeather from "./FiveDayWeather";

function Weather() {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            console.log(position);
            API.weather(
              position.coords.latitude,
              position.coords.longitude
            ).then((res) => {
              console.log(res.data);
              setWeather(res.data);
            });
          },
          (err) => {
            console.log("User denied permission");
          }
        );
      } else {
        alert("Geolocation is not supported by this browswer");
      }
    }
    getLocation();
  }, []);
  return (
    <>
      <CurrentWeather weather={weather} />
      <FiveDayWeather weather={weather} />
    </>
  );
}

export default Weather;
