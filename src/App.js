
import { useState } from 'react';
import './App.css';

import { WEATHER_API_URL ,WEATHER_API_KEY} from './Components/Api';
import { CurrentWeather } from './Components/Current-Weather/CurrentWeather';
import { Search } from './Components/Search';
import { Forecast } from './Components/Forecast/Forecast';


function App() {
  const [currentWeatherData,setCurrentWeather]= useState(null)
  const[forecast,setForecast]=useState(null)

  const handelOnSearchChange=(searchData)=>{
 const [lat,lon]=searchData.value.split("")

 const currentWeatherFetch=fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
 const forecastFetch=fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
 Promise.all([currentWeatherFetch, forecastFetch]).then(async(response)=>{

 const weatherResponse= await response[0].json()
 const forecastResponse= await response[1].json()
 
 setCurrentWeather({city:searchData.label,...weatherResponse})
 setForecast({city:searchData.label,...forecastResponse})
 
 }).catch((err)=>{
console.log(err)
 })
 console.log(currentWeatherData,"kkkk")
 console.log(forecast,"kkkk")
  }
  return (
    <div className="container">
      <Search onSearchChange={handelOnSearchChange} />
     
    {currentWeatherData && <CurrentWeather data={currentWeatherData} />}
{forecast && <Forecast data={forecast} />}  
    </div>
   
  );
}

export default App;
