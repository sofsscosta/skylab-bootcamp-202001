const net = require('net')

const server = net.createServer(socket => {
    socket.on('data', chunk => {
        console.log(socket.remoteAddress, chunk.toString())

        socket.end('OK')
    })
})

server.listen(8080)