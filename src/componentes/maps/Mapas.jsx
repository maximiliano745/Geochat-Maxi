
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { iconPerson } from './Marker'
import "leaflet/dist/leaflet.css"

//function Mapas(): JSX.Element {
const Mapas = () => {

  let lon;
  let lat;

  lon = +sessionStorage.getItem("lon");
  lat = +sessionStorage.getItem("lat");

  const markers = [
    {
      geocde: [lat, lon],
      poPup: "Aca esto Yo",
    },
    {
      geocde: [-36.90360720582748, -57.93253794149154],
      poPup: "Aca Otro cero"
    },
    {
      geocde: [-35.902164359577824, -57.926010680031034],
      poPup: "Aca Otro uno"
    },
    {
      geocde: [-33.911152090082844, -57.936364006949894],
      poPup: "Aca Otro dos"
    },
    {
      geocde: [-34.879533504630686, -57.9832897503023],
      poPup: "Aca Otro tres"
    },
    {
      geocde: [-37.756013947982936, -62.37997302427785],
      poPup: "Aca Otro cuatro"
    },
    {
      geocde: [-38.67605195201793, -62.245905487305926],
      poPup: "Aca Otro cinco"
    }
  ]

 

  //alert(lon)
  return (
    <div>
      <h1 className="title">Mi Mapa</h1>

      <MapContainer style={{ height: "450px", width: "100%" }} center={[lat, lon]} zoom={6}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {markers.map((mm, index) => (
          
          <Marker  position={mm.geocde} icon={iconPerson}key={index}>
            <Popup>
              {mm.poPup}
            </Popup>
          </Marker>
        ))}

      </MapContainer>
    </div>
  )
}

export default Mapas

