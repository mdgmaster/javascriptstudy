import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Weather = ({country}) => {

const api_key = process.env.REACT_APP_API_VALUE
const [weather, setWeather] = useState([])
const country_value = country
const api_value = api_key 

console.log('weather',weather)
useEffect(() =>{
    axios
    .get('http://api.weatherstack.com/current?access_key='+api_value+'&query='+country_value)
    .then(response => {
        setWeather(response.data)
    })
    },[])
    // console.log('Wheater',weather)
    console.log('weather',weather)
    if(weather.length !== 0){ // Solo cuando el useEffect nos haya devuelto la información la podremos emplear. 
    return(
        <div>
            <h3>Weather in {country}</h3>
            <strong>temperature: {weather.current.temperature}</strong><br/>
            <img src={weather.current.weather_icons[0]} alt="weather"/><br/> 
            <strong>wind: </strong> {weather.current.wind_speed}
        </div>
    )
    }else{
        return(
            <div>
                <h3>Weather in {country}</h3>
                <strong>temperature: information not ready </strong><br/>
                <img src="" alt="weather"/><br/> 
                <strong>wind: Information not ready</strong> 
            </div>
        )
    }

}

export default Weather