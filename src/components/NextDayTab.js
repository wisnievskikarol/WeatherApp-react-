import React from 'react'
import Humidity from '../img/humidity.svg'
import Pressure  from '../img/gauge.svg'
import Broken_clouds from '../img/broken_clouds.svg'
import Few_clouds from '../img/few_clouds.svg'
import Fog from '../img/fog.svg'
import Scattered_clouds from '../img/scattered_clouds.svg'
import Shower_rain from '../img/shower_rain.svg'
import Sun from '../img/sun.svg'
import Thunderstorm from '../img/thunderstorm.svg'
import Snowflake from '../img/snowflake.svg'


import './NextDayTab.css'

function NextDayTab(props) {

    let weatherIcon = null;

    switch(props.data.weather[0].main) {
        case "Clear" : weatherIcon = <img src = {Sun}/>;
        break;
        case "Clouds" : weatherIcon = <img src = {Few_clouds}/>;
        break;
        case "scattered clouds" : weatherIcon = <img src = {Scattered_clouds}/>;
        break;
        case "broken clouds" : weatherIcon = <img src = {Broken_clouds}/>;
        break;
        case "Drizzle" : weatherIcon = <img src = {Shower_rain}/>;
        break;
        case "Rain" : weatherIcon = <img src = {Shower_rain}/>;
        break;
        case "Thunderstorm" : weatherIcon =  <img src = {Thunderstorm}/>;
        break;
        case "Snow" : weatherIcon = <img src = {Snowflake}/>;
        break;
        case "Mist" : weatherIcon = <img src = {Fog}/>;
        break;
        default :weatherIcon = <img src = {Fog}/>;
        break
        
    }

    return (
        <div className = "NextDayTab_container">
            <div className = "NextDayTab_weatherIcon">
                {weatherIcon}
            </div>
            <div className = "NextDayTab_weatherText">
            <div className = "NextDayTab_titleTab">
                <p>{props.data.main.temp}°C </p>
                <p> ,&nbsp;{props.data.weather[0].main}</p>
            </div>
            
            <p>{props.data.weather[0].description}</p>
            </div>
        </div>
    )
}

export default NextDayTab
