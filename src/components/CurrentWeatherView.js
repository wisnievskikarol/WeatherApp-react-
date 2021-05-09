import React from 'react'
import './CurrentWeatherView.css'
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


function CurrentWeatherView(props) {


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

    console.log(props.data.main.humidity);
    return (


        <div className = "CurrentWeatherView_Container">
            <div className = "CurrentWeatherView_Forcast_for_cnt">
                <h1 className = "CurrentWeatherView_title_1_2">Forcast for&nbsp;</h1><h1 className = "CurrentWeatherView_title_2_2">{props.data.name}</h1>
            </div>
            <div className = "CurrentWeatherView_mainTab">
                <div className ="CurrentWeatherView_leftTab">

                    <div >
                        <h2>{props.data.weather[0].main}, {props.data.main.temp}°C</h2>
                        <p style = {{marginTop: "-10px"}}>{props.data.weather[0].description}</p>
                    </div>
                    <div className = "CurrentWeatherView_extended_info">
                        <img src = {Pressure} className = "CurrentWeatherView_humidity"></img>
                        <p>{props.data.main.pressure}</p>

                        <img src = {Humidity} className = "CurrentWeatherView_humidity"></img>
                        <p>{props.data.main.humidity}</p>
                    </div>
                
                </div>
                    <div className="CurrentWeatherView_rightTab">
                        {weatherIcon}
                    </div>
            </div>
        </div>

    )
}

export default CurrentWeatherView
