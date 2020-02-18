const net = require('net')
const { argv: [, ,  message, host ,port]} = process
const socket = net.createConnection({host, port})
socket.write(message)

//net => es un modulo que proveé de una comunicación asincrona 

// { argv: [, , message, host ,port]} => los argumentos que tengo que pasar por consola

// net.createConnection({host, port}) => creo una conexion hacia ese host(ip) y puerto que recibo por process

//socket.write(message) => para enviar el mensaje