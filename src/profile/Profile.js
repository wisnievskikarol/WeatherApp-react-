import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import CurrentWeatherView from "../components/CurrentWeatherView";
import Alert from "../components/Alert";
import NextDayTab from "../components/NextDayTab";
import { Circle, Heart, Orbitals } from "react-spinners-css";
import "./Profile.css";
function Profile() {
  const [searchInput, setSearchInput] = useState("");
  const [clickedButton, setClickedButton] = useState(true);
  const [APIresponse, setAPIresponse] = useState({});
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [error, setError] = useState(false);

  const weatherAPIRequest = () => {
    setLoadingStatus(true);
    setError(false);

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&units=metric&appid=9e363af8ebc722f0c7ed39808506da0d`
    )
      .then((response) => response.json())
      .then((data) => setAPIresponse(data))
      .catch(setError(true));
    setLoadingStatus(false);
    setClickedButton(false);
  };
  return (
    <div className="container">
      <Navbar inputSearch={setSearchInput} buttonClick={weatherAPIRequest} />

      {APIresponse.cod == 200 ? (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <CurrentWeatherView data={APIresponse} />
          <div className = "Profile_nextDaysTabsCnt">
              <h2>Next days</h2>
            <div className = "Profile_nextDaysTabs">
              <NextDayTab data={APIresponse} /> 
              <NextDayTab data={APIresponse} />
              <NextDayTab data={APIresponse} />
            </div>
          </div>
        </div>
      ) : error ? (
        <Alert text="Something went wrong 💩" />
      ) : loadingStatus == false ? (
        <Alert text="Nothing to show 😔" />
      ) : (
        <Orbitals color="#f9be16" size={200} />
      )}
    </div>
  );
}

export default Profile;
