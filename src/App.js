import { useEffect, useState } from 'react'
import { getCurrentLatLng } from './services/geolocation'

import './App.css';
import Map from './components/Map/Map';

function App () {

  const [appData, setAppData] = useState({
    lat: null,
    lng: null,
  })

  async function getAppData() {
    // we need broswer location
    const {lat, lng} = await getCurrentLatLng() // await is like saying wait until I'm done
      console.log('got app data')
    // we need weather data
    // set component state to the received values
    setAppData({lat, lng})
  }

  useEffect(() => {
    getAppData()
  }, []) // the empty array prevents an infinite loop.

  return (
    <div className='App'>
      <Map lat={appData.lat} lng={appData.lng}/>
      <header className='App-header'>
        REACT WEATHER
      </header>
    </div>
  );
}

export default App;
