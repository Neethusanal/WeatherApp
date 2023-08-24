import "./Currentweather.css";
import React from "react";

export const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="City">Bahrain</p>
          <p className="weather-description">Sunny</p>
        </div>
        <img alt="weather" className="weather icon" src="icons/01d.png" />
      </div>
      <div className="bottom">
        <p className="temperature">18℃</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like:</span>
            <span className="parameter-value">22 ℃</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind:</span>
            <span className="parameter-value">2 m/sec</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity:</span>
            <span className="parameter-value">15%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure:</span>
            <span className="parameter-value">15pascals</span>
          </div>
        </div>
      </div>
    </div>
  );
};
