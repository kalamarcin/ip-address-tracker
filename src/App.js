import axios from 'axios'
import { useRef, useState, useEffect } from 'react'

import './App.scss'
import Map from './Components/Map'

function App() {
  const searchInput = useRef('')
  const [ipAdress, setIpAdress] = useState()
  const [city, setCity] = useState()
  const [country, setCountry] = useState()
  const [timezone, setTimezone] = useState()
  const [isp, setIsp] = useState()
  const [lat, setLat] = useState('')
  const [lng, setLng] = useState('')

  const handleSearch = () => {
    fetchData()
  }
  const fetchData = async () => {
    const APIKEY = process.env.REACT_APP_UNSPLASH_KEY
    const API = `https://geo.ipify.org/api/v2/country,city?apiKey=${APIKEY}&ipAddress=${searchInput.current.value}`

    await axios
      .get(API)
      .then(res => {
        setIpAdress(res.data.ip)
        setCity(res.data.location.city)
        setCountry(res.data.location.country)
        setTimezone(res.data.location.timezone)
        setIsp(res.data.isp)
        setLat(res.data.location.lat)
        setLng(res.data.location.lng)
      })
      .catch(err => {
        console.log(err)
      })
  }
 
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="App">
      <div className="header">
        <h1>IP Address Tracker</h1>
        <div className="search-bar">
          <input ref={searchInput} type="text" />
          <button onClick={handleSearch}>
            <i className="fa-sharp fa-solid fa-chevron-right"></i>
          </button>
        </div>
        <div className="data">
          <h2>IP ADRESS</h2>
          <p>{ipAdress}</p>
          <h2>LOCATION</h2>
          <p>
            {city}, {country}
          </p>
          <h2>TIMEZONE</h2>
          <p>UTC {timezone}</p>
          <h2>ISP</h2>
          <p>{isp}</p>
        </div>
      </div>

      <div className="map">
        <Map lat={lat} lng={lng} />
      </div>
    </div>
  )
}

export default App
