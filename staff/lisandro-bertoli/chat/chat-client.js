const net = require('net')


const { argv: [, , host, port, username, message] } = process

const socket = net.createConnection({ host, port })

socket.write(`${username}: ${message}`)


let counter = 0

socket.on('data', chunk => {
    console.log(chunk.toString())
    ++counter

    if (counter === 2) {
        counter = 0
        socket.destroy()
    }
})

