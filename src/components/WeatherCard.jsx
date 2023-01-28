import React, { useState } from 'react'

const WeatherCard = ({weather, temperature}) => {
const [isCelsius, setIsCelsius] = useState(true)

    const handleClick = () => setIsCelsius(!isCelsius)

    
 
    return (
    <article className='container'>
        <div className='content__header'>
            <h1>Clima App</h1>
            <h2>{weather?.name}, {weather?.sys.country}</h2>
            <img className='img__header' src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}.png`} alt="" />
        </div>
       
        <section className='content__seccion'>
            <h3 className='description'>State: {weather?.weather[0].description}</h3>
            <ul className='list__info'>
                <li><i class='bx bx-wind'></i><span>Wind Speed:</span>{weather?.wind.speed} m/s</li>
                <li><i class='bx bxs-cloud'></i><span>Clouds:</span>{weather?.clouds.all} %</li>
                <li><i class='bx bx-sort-down'></i><span>Pressure:</span>{weather?.main.pressure} hPa</li>
            </ul>
        </section>
        <footer className='content__footer'>
            <h2 className='temperature'>Temp: {isCelsius ?  temperature?.celsius + "°C"
            : temperature?.farenheit + "°F"}</h2>
            <button className='btn' onClick={handleClick}>Change to {isCelsius ? "°F" : "°C"}</button>
        </footer>
        
    </article>
  )
}

export default WeatherCard