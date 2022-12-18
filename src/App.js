import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import './App.scss'
import Map from './Components/Map'

function App() {
  const searchInput = useRef('')
  const [ipAdress, setIpAdress] = useState()
  const [city, setCity] = useState()
  const [country, setCountry] = useState()
  const [timezone, setTimezone] = useState()
  const [isp, setIsp] = useState()

  const handleSearch = () => {
    fetchData()
  }
  const fetchData = async () => {
    const APIKEY = 'at_f88VGFU4g7b98pdAbvRmqUl7A091A'
    const API = `https://geo.ipify.org/api/v2/country,city?apiKey=${APIKEY}&ipAddress=${searchInput.current.value}`

    await axios
      .get(API)
      .then(res => {
        const getIP = res.data.ip
        const getCity = res.data.location.city
        const getCountry = res.data.location.country
        const getTimezone = res.data.location.timezone
        const getIsp = res.data.isp
        setIpAdress(getIP)
        setCity(getCity)
        setCountry(getCountry)
        setTimezone(getTimezone)
        setIsp(getIsp)
      })
      .catch(err => {
        console.log(err)
      })
  }

  // useEffect(() => {
  //   fetchData()
  // }, [])

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
        <p>{ipAdress}ip adress</p>
        <h2>LOCATION</h2>
        <p>
          {city}, {country} gdansk
        </p>
        <h2>TIMEZONE</h2>
        <p>UTC {timezone} -10000</p>
        <h2>ISP</h2>
        <p>{isp} firma</p>
      </div>
      </div>

      
      <div className="map">
        <Map/>
      </div>
    </div>
  )
}

export default App
