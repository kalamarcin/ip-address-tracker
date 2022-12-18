import { MapContainer, useMap, TileLayer, Marker, Popup } from 'react-leaflet'
import './Map.scss'

const Map = ({ lat, lng }) => {
  function MyComponent(props) {
    const map = useMap()
    map.setView(props.center, props.zoom)
    return null
  }

  return (
    <div className="map-container">
      <MapContainer center={[lat, lng]} zoom={13} scrollWheelZoom={false}>
        <MyComponent center={[lat, lng]} />
        <TileLayer
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
          url="https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=NSuQr8JNBhIHpHOlpik8"
        />
        <Marker position={[lat, lng]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default Map
