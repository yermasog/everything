import React, { useEffect, useState } from "react";

import API from "../../utils/API";

export function CurrentWeather() {
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
  let inputStyle =
    weather.current?.uvi >= 8
      ? { backgroundColor: "red", borderRadius: "5px", color: "white" }
      : (weather.current?.uvi >= 6) & (weather.current?.uvi < 8)
      ? { backgroundColor: "orange", borderRadius: "5px" }
      : (weather.current?.uvi > 2) & (weather.current?.uvi < 6)
      ? {
          backgroundColor: "yellow",
          borderRadius: "5px",
          border: "1px solid black",
        }
      : { backgroundColor: "green", borderRadius: "5px", color: "white" };

  return (
    <div>
      <div className="card">
        <div className="card-section">
          <img
            src={`https://openweathermap.org/img/wn/${weather.current?.weather[0].icon}@2x.png`}
            alt={""}
          />
        </div>
        <div className="card-section">
          <h5 className="">
            <span>{`${weather.current?.temp.toFixed(0)}° F`}</span>
          </h5>
          <h6 className="" style={{ textTransform: "capitalize" }}>
            {weather.current?.weather[0].description}
          </h6>
          <p className="" style={{ lineHeight: "40%" }}>
            Humidity {weather.current?.humidity}%
          </p>
          <p className="" style={{ lineHeight: "40%" }}>
            UV Index <span style={inputStyle}>{weather.current?.uvi}</span>
          </p>
          <p className="" style={{ lineHeight: "40%" }}>
            Wind{" "}
            <span style={{ lineHeight: "40%" }}>
              {weather.current?.wind_speed}MPH
            </span>
          </p>
        </div>
        <a class="button primary" href="#">
          5 Day
        </a>
      </div>
    </div>
  );
}

export default CurrentWeather;
