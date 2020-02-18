const net = require('net')

const server = net.createServer(socket =>{
    socket.on('data', chunk =>{
        // const message = JSON.parse(chunk)
        // console.log(message)
        console.log(chunk.toString())
        socket.end('OK')
    })
})
server.listen(8080)