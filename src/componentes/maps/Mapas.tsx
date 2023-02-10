
import React from 'react'
import {MapContainer, TileLayer, Marker} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import {iconPerson} from '../maps/Marker'

//function Mapas(): JSX.Element {
const Mapas=()=>{

  let lon:number
  let lat:number
  
  lon=Number(sessionStorage.getItem("lon"))
  lat=Number(sessionStorage.getItem("lat"))
   
  //alert(lon)
  return (
    <div>
      { <h1 className="title">Mi Mapa</h1> }
            
            <MapContainer style={{ height: "450px", width: "100%" }}
             center={[lat,lon]} zoom={10}>
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={{ lat:lat, lng:lon}} icon={iconPerson}> </Marker>
            </MapContainer>
          </div>
  )
}

export default Mapas