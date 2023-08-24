
import './App.css';
import { CurrentWeather } from './Components/Current-Weather/CurrentWeather';
import { Search } from './Components/Search';

function App() {

  const handelOnSearchChange=(searchData)=>{
 const [lat,lon]=searchData.value.split("")
 

  }
  return (
    <div className="container">
     <Search onSearchChange={handelOnSearchChange}/>
     <CurrentWeather/>
    </div>
  );
}

export default App;
