import React from "react";
import Modal from "react-modal";

const FiveDayWeather = ({ weather, open, onClose, onRequestClose }) => {
  {
    /* MODAL STYLES */
  }
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      zIndex: 1001,
      transform: "translate(-50%, -50%)",
      maxHeight: "100vh",
      overflowY: "auto",
      // background: "#fff",
      backgroundImage: `url("https://images.pexels.com/photos/912364/pexels-photo-912364.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")`,
    },
    overlay: {
      zIndex: 1000,
      backgroundColor: "rgb(72,72,72,.95)",
    },
  };

  // CURRENT DAY DATE \\
  const currentDay = new Date(
    weather.daily?.[0].dt * 1000
  ).toLocaleDateString();

  return (
    <Modal isOpen={open} onRequestClose={onRequestClose} style={customStyles}>
      <div className="flex-container">
        <div class="grid-x grid-margin-x small-up-5 ">
          {/* 5 DAY DAY 1 */}
          <div className="cell">
            <div className="card" style={{ minHeight: "380px" }}>
              <div className="card-section">
                <h5>
                  {new Date(weather.daily?.[1].dt * 1000).toLocaleDateString()}
                </h5>
                <img
                  src={`https://openweathermap.org/img/wn/${weather.daily?.[1].weather[0].icon}@2x.png`}
                  alt={""}
                />
              </div>
              <div
                className="card-section"
                style={{
                  textTransform: "capitalize",
                  backgroungColor: "white",
                }}
              >
                <p>{weather.daily?.[1].weather[0].description}</p>
                <p>Low {weather.daily?.[1].temp.min.toFixed(0)}°</p>
                <p>High {weather.daily?.[1].temp.max.toFixed(0)}°</p>
                <p>Humidity {weather.daily?.[1].humidity.toFixed(0)}%</p>
              </div>
            </div>
          </div>
          {/* 5 DAY DAY 2 */}
          <div className="cell">
            <div className="card" style={{ minHeight: "380px" }}>
              <div className="card-section">
                <h5>
                  {new Date(weather.daily?.[2].dt * 1000).toLocaleDateString()}
                </h5>
                <img
                  src={`https://openweathermap.org/img/wn/${weather.daily?.[2].weather[0].icon}@2x.png`}
                  alt={""}
                />
              </div>
              <div
                className="card-section"
                style={{
                  textTransform: "capitalize",
                  backgroungColor: "white",
                }}
              >
                <p>{weather.daily?.[2].weather[0].description}</p>
                <p>Low {weather.daily?.[2].temp.min.toFixed(0)}°</p>
                <p>High {weather.daily?.[2].temp.max.toFixed(0)}°</p>
                <p>Humidity {weather.daily?.[2].humidity.toFixed(0)}%</p>
              </div>
            </div>
          </div>
          {/* 5 DAY DAY 3 */}
          <div className="cell">
            <div className="card" style={{ minHeight: "380px" }}>
              <div className="card-section">
                <h5>
                  {new Date(weather.daily?.[3].dt * 1000).toLocaleDateString()}
                </h5>
                <img
                  src={`https://openweathermap.org/img/wn/${weather.daily?.[3].weather[0].icon}@2x.png`}
                  alt={""}
                />
              </div>
              <div
                className="card-section"
                style={{
                  textTransform: "capitalize",
                  backgroungColor: "white",
                }}
              >
                <p>{weather.daily?.[3].weather[0].description}</p>
                <p>Low {weather.daily?.[3].temp.min.toFixed(0)}°</p>
                <p>High {weather.daily?.[3].temp.max.toFixed(0)}°</p>
                <p>Humidity {weather.daily?.[3].humidity.toFixed(0)}%</p>
              </div>
            </div>
          </div>
          {/* 5 DAY DAY 4 */}
          <div className="cell">
            <div className="card" style={{ minHeight: "380px" }}>
              <div className="card-section">
                <h5>
                  {new Date(weather.daily?.[4].dt * 1000).toLocaleDateString()}
                </h5>
                <img
                  src={`https://openweathermap.org/img/wn/${weather.daily?.[4].weather[0].icon}@2x.png`}
                  alt={""}
                />
              </div>
              <div
                className="card-section"
                style={{
                  textTransform: "capitalize",
                  backgroungColor: "white",
                }}
              >
                <p>{weather.daily?.[4].weather[0].description}</p>
                <p>Low {weather.daily?.[4].temp.min.toFixed(0)}°</p>
                <p>High {weather.daily?.[4].temp.max.toFixed(0)}°</p>
                <p>Humidity {weather.daily?.[4].humidity.toFixed(0)}%</p>
              </div>
            </div>
          </div>
          {/* 5 DAY DAY 5 */}
          <div className="cell">
            <div className="card" style={{ minHeight: "380px" }}>
              <div className="card-section">
                <h5>
                  {new Date(weather.daily?.[5].dt * 1000).toLocaleDateString()}
                </h5>
                <img
                  src={`https://openweathermap.org/img/wn/${weather.daily?.[5].weather[0].icon}@2x.png`}
                  alt={""}
                />
              </div>
              <div
                className="card-section"
                style={{
                  textTransform: "capitalize",
                  backgroungColor: "white",
                }}
              >
                <p>{weather.daily?.[5].weather[0].description}</p>
                <p>Low {weather.daily?.[5].temp.min.toFixed(0)}°</p>
                <p>High {weather.daily?.[5].temp.max.toFixed(0)}°</p>
                <p>Humidity {weather.daily?.[5].humidity.toFixed(0)}%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        style={{ border: "1px solid white", fontWeight: "bold" }}
        onClick={onClose}
        class="button primary"
        href="#/"
      >
        Close
      </a>
    </Modal>
  );
};

export default FiveDayWeather;
