import { useState } from 'react';
import './App.css';
import Map from './components/Map';
import RestaurantList from './components/RestrauntList';
import Explore from './components/Explore';

function App() {
  const apikey = "3c6lSSEiWgHS8hTMQIGALMvXZBnYTSwE-st42tatJWc"

  const userPosition = { lat: 64.1472, lng: -21.9398 };

  const restaurantList = [
    {
      name: "The Fish Market",
      location: { lat: 64.1508, lng: -21.9536 },
    },
    {
      name: "Bæjarins Beztu Pylsur",
      location: { lat: 64.1502, lng: -21.9519 },
    },
    {
      name: "Grillmarkadurinn",
      location: { lat: 64.1475, lng: -21.9347 },
    },
    {
      name: "Kol Restaurant",
      location: { lat: 64.1494, lng: -21.9337 },
    },
  ];

  const [restaurantPosition, setRestrauntPosition] = useState(null)

  const onClickHandler_ = (location) => {
    console.log(location)
    setRestrauntPosition(location)
  }

  return (
    <div>
      <RestaurantList list={restaurantList} onClickHandler={onClickHandler_} />
      <Map
        apikey={apikey}
        userPosition={userPosition}
        restaurantPosition={restaurantPosition}
      />
      <Explore apikey={apikey}/>
    </div>

  );
}

export default App;
