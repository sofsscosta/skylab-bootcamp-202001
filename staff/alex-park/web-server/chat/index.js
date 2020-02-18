const net = require('net')

let connections = 0
const port = 8080

const server = net.createServer(socket => {
    socket.on('data', chunk => {
        console.log(chunk.toString())

        //socket.end(`HTTP/1.1 200 OK\nServer: Cowboy\nAccess-Control-Allow-Origin: *\nConnections: ${++connections}\nContent-Type: text/plain\n\n<h1>HOLA MUNDO</h1>\n`) // Content-Type: text/html
        socket.end(`HTTP/1.1 404
Connections: ${++connections}
Content-Type: text/html

<h1>Not found</h1>
`)
    })
})

server.listen(port)