const net = require('net')
const fs = require('fs')

const server = net.createServer(socket => {
    socket.on('data', chunk => {
        const pageRequest = chunk.toString().split(' ')[1]

        const rs = fs.createReadStream(pageRequest === '/' ? './index.html' : `./${pageRequest}.html`)

        rs.on('error', () => {
            socket.end(`HTTP/1.1 404 NOT FOUND
Content-Type: text/html

<h1>404 - Not Found</h1>`)
            })
        
        rs.on('data', chunk => {
            socket.write(`HTTP/1.1 200
Content-Type: text/html

${chunk}`)
        })

        rs.on('end', () => socket.destroy())
    })
})

server.listen(8000)