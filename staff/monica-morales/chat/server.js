const net = require('net') 

const server = net.createServer( socket => { 
    socket.on('data', chunk => { 
        console.log(socket.remoteAddress, chunk.toString())
        socket.end('OK')
    })
})
server.listen('8080')

//net => es un modulo que proveé de una comunicación asincrona para el uso de la API basado en streeming para tcp

//net.createServer => crea un servidor que escucha en una IP y un puerto definido por el socket que le envío

//socket => es una variable que se podría llamar de cualquier otra manera. 

//socket.on => abre la escucha

//data => palabra reservada para recibir el mensaje 

//chunk.toString() => es el mensaje que recibo

//socket.end => cierra la escucha

//server.listen('8080') => servidor escuchando en puerto 8080
