const http = require('http')
const fs = require('fs')
const logger = require('./logger')

const { argv: [, , port = 8000] } = process

const server = http.createServer((req, res) => {

    logger.info(`request from ${req.socket.remoteAdress} : ${req.url}`)
    
    const rs = fs.createReadStream(`.${req.url === '/' ? '/index.html' : req.url}`)
    
    if(req.url !== 'favicon.ico') {
        rs.on('data', body => {
            res.end(body)
        })
    
        rs.on('error', error => {
            logger.warn(error)
            res.writeHead(404)
            res.end('<h1>NOT FOUND</h1>')
        })
    }
    else {
        logger.warn(error)
        res.writeHead(404)
        res.end('<h1>NOT FOUND</h1>')
    }
})

logger.info('starting server')

server.listen(port, () => {
    logger.info(`server running on port ${port}`)
})