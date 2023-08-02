import L from 'leaflet';

const iconPerson = new L.Icon({
    iconUrl: require('../../imagenes/icon.png'),
    iconRetinaUrl: require('../../imagenes/icon.png'),
    iconAnchor:undefined,
    popupAnchor: [0, -20],
    shadowUrl: undefined,
    shadowSize: [40,40],
    shadowAnchor: undefined,
    iconSize: new L.Point(25, 20),
    className: 'leaflet-div-icon'
});

export { iconPerson };