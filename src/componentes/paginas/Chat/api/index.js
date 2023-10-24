//const API_URL = "geochat-efn9.onrender.com"

//var socket = new WebSocket("ws://localhost:10000/api/v2/users/ws");
var socket = new WebSocket("wss://" + API_URL + "/api/v2/users/wss");

let connect = (cb) => {
    console.log("Conectando....");

    socket.onopen = () => {
        console.log("Coneccion Habierta...!!!");
    }

    socket.onmessage = (msg) => {
        console.log("Mensaje desde WebSocket: ", msg);
        cb(msg);
    }

    socket.onclose = (event) => {
        console.log("Coneccion Cerrada.....: ", event);
    }

    socket.onerror = (error) => {
        console.log("Socket Error: ", error);
    }
};

let sendMsg = (msg) => {
    console.log("Mandando mensaje: ", msg);
    socket.send(msg);
}
export { connect, sendMsg };
