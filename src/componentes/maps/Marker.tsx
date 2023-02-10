import L from 'leaflet';

const iconPerson = new L.Icon({
    iconUrl: require('../../imagenes/icon.png'),
    iconRetinaUrl: require('../../imagenes/icon.png'),
    iconAnchor:undefined,
    popupAnchor: undefined,
    shadowUrl: undefined,
    shadowSize: undefined,
    shadowAnchor: undefined,
    iconSize: new L.Point(25, 20),
    className: 'leaflet-div-icon'
});

export { iconPerson };