//var socket = new WebSocket('ws://localhost:8080/ws');  // Hera 9000!!!!
var socket = new WebSocket('ws://https://geochat-efn9.onrender.com/ws');

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

