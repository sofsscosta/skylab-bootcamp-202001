const net = require('net')

// $ node chat-client <message> <ip> <port>

const { argv: [, , message, ip, port] } = process

const socket = net.createConnection({ host: ip, port })

socket.write(message)