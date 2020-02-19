const net = require('net')
const logger = require('./logger')
const fs = require('fs')

const { argv: [, , port = 8000] } = process

logger.setDebugEnabled(true)

logger.debug('starting server')

const server = net.createServer(socket => {
    logger.debug('setting encoding to utf8')

    socket.on('data', chunk => {
        logger.info(`request from ${socket.remoteAddress}:
${chunk}`)

        const pageRequest = chunk.toString().split(' ')[1]

        const rs = fs.createReadStream(pageRequest === '/' ? './index.html' : `./${pageRequest}.html`)

        rs.on('error', error => {
            logger.warn(error)

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

server.listen(port, () => logger.info(`server up and running on port ${port}`))

process.on('SIGINT', () => {
    logger.warn(`server abruptly stopped`)

    setTimeout(() => process.exit(0), 1000)
})