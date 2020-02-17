const net = require('net')

const {argv: [,, message, host, port]} = process

const socket = net.createConnection({host, port})   

socket.write(message)