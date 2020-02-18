const net = require('net')

let users = {}

let counter = 0

const server = net.createServer( socket => {
    
	socket.on('data', chunk => {
        console.log(chunk.toString())
        user = socket
        users[user] = socket
        socket.end('Bye bye!')
    })
})

server.listen(8080)