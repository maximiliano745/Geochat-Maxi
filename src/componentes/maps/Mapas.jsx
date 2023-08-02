
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
//import { iconPerson } from './Marker'
import "leaflet/dist/leaflet.css"
import ThreeDRotation from '@material-ui/icons/AccessibilityNewOutlined';
import MarkerClousterGroup from "react-leaflet-cluster";
//import { Icon } from '@material-ui/core';
import { Icon, divIcon } from 'leaflet'
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';

//function Mapas(): JSX.Element {
const Mapas = () => {

  let lon;
  let lat;

  lon = +sessionStorage.getItem("lon");
  lat = +sessionStorage.getItem("lat");

  const markers = [
    {
      geocde: [lat, lon],
      poPup: "Aca estoy Yo-----",
    },
    {
      geocde: [-34.88, -57.95],
      poPup: "Cerca 1",
    },
    {
      geocde: [-34.88977157126982, -57.95808382745051],
      poPup: "Cerca 2",
    },
    {
      geocde: [-34.89645958075579, -57.9549510073025],
      poPup: "Cerca 3 ",
    },
    {
      geocde: [-34.90019054947647, -57.96192475078524],
      poPup: "Cerca 4",
    },
    {
      geocde: [-34.904991766767594, -57.9672312047735],
      poPup: "Cerca 5",
    },
    {
      geocde: [-36.90360720582748, -57.93253794149154],
      poPup: "Cerca 6"
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

  const custoIcon = new Icon({
    iconUrl: require('../../imagenes/icon.png'),
    iconSize: [38, 38],
  })

  const createCustomClusterIcon = (cluster) => {
    return new divIcon({
      html: `<div> class="cluster-icon"${cluster.getChildCount()}</div>`,
      className: "custom-marker-cluster",
      color: 'secundary'
      //iconSize: point(33,33,true)
    })
  }

  //alert(lon)
  return (
    <div>
      <h2 className="title">Mi Mapa</h2>
      <MapContainer style={{ height: "450px", width: "100%" }} center={[lat, lon]} zoom={6}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <MarkerClousterGroup
          chunkedLoading
          inconCreateFunction={createCustomClusterIcon}
        >
          {markers.map((mm, index) => (
            
            <Marker position={mm.geocde} icon={custoIcon} key={index} color='secondary'>
              <Popup>
                {mm.poPup}
                <ThreeDRotation color='primary' />
                <LocationSearchingIcon/>
              </Popup>
            </Marker>
          ))}
        </MarkerClousterGroup>



        
      </MapContainer>
    </div>
  )
}

export default Mapas
