import React, { useState } from 'react'
import Social from './Social'


const WeatherCard = ({weather, temperature}) => {
const [isCelsius, setIsCelsius] = useState(true)

    const handleClick = () => setIsCelsius(!isCelsius)

    return (
    <article className='container'>
        <section className='content__header'>
            <h1 className='city'>{weather?.name}, {weather?.sys.country}</h1>
            <h2 className='temperature'>{isCelsius ?  temperature?.celsius + "°C"
            : temperature?.farenheit + "°F"}</h2>
            <img className='img__header' src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}.png`} alt="" />
            <h3 className='description'>{weather?.weather[0].description}</h3>
            <button className='btn' onClick={handleClick}>Change to {isCelsius ? "°F" : "°C"}</button>  
            <ul className='list__info'>
                <li><i class='bx bx-wind'></i><span>Wind Speed:</span>{weather?.wind.speed} m/s</li>
                <li><i class='bx bxs-cloud'></i><span>Clouds:</span>{weather?.clouds.all} %</li>
                <li><i class='bx bx-sort-down'></i><span>Pressure:</span>{weather?.main.pressure} hPa</li>
            </ul>
            <Social />
        </section>
        <div className='content__seccion'>      
            <span>Hover here<i class='bx bx-down-arrow-alt arrow'></i></span><h3 className='phrase'>Pronostico para ti: Hoy sera tu día de suerte</h3>
        </div>       
    </article>
  )
}

export default WeatherCard