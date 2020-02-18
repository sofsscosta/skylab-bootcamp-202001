const net = require('net')

const {argv:[,, host, port, name, message]} = process

let counter = 0

const socket = net.createConnection({host, port})

socket.write(`${name}: ${message}`)