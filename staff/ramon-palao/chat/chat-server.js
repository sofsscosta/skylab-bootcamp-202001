const net = require('net')
const server = net.createServer(socket =>{
    socket.on('data', chunk =>{
        const message = (chunk.toString())
        console.log(message)
        socket.end('OK')
    })
})
server.listen(8080)

if (typeof module !== "undefined"){
    module.exports = server
}