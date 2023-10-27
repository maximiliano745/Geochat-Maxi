const API_URL = "geochat-efn9.onrender.com"

//var socket = new WebSocket("ws://localhost:10000/api/v2/users/ws");
var socket = new WebSocket("wss://" + API_URL + "/api/v2/users/wss");

let connect = (cb) => {
    console.log("Conectando....");

    socket.onopen = () => {
        console.log("------------>  Coneccion Habierta...!!!");
    }

    socket.onmessage = (msg) => {
        console.log("------------>  Mensaje desde WebSocket: ", msg);
        cb(msg);
    }

    socket.onclose = (event) => {
        console.log("------------>  Coneccion Cerrada.....: ", event);
    }

    socket.onerror = (error) => {
        console.log("------------>  Socket Error: ", error);
    }
};

let sendMsg = (msg) => {

    console.log("------------>  Mandando mensaje: ", msg);
    
    if (socket.readyState === WebSocket.CLOSED) {
        console.log("Reconectando al WebSocket...");
        //socket = new WebSocket("ws://localhost:10000/api/v2/users/ws");
        var socket = new WebSocket("wss://" + API_URL + "/api/v2/users/wss");

        socket.onopen = () => {
            console.log("------------>  Conección Habierta... Reenviando mensaje: ", msg);
            socket.send(msg); // Envía el mensaje después de reconectar
        };

        socket.onclose = (event) => {
            console.log("------------>  Conección Cerrada nuevamente: ", event);
        };
    } else if (socket.readyState === WebSocket.OPEN) {
        // WebSocket está abierto, enviar el mensaje
        socket.send(msg);
    } else {
        console.log("------------>  El WebSocket está en un estado inesperado.");
    }
}
export { connect, sendMsg };
