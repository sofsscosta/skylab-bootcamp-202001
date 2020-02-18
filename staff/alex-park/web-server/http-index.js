const http = require('http')
const logger = require('./logger')
const fs = require('fs')

const { argv: [, , port = 8080] } = process

// logger.setDebugEnabled(true)

logger.debug('starting server')

const requestListener = (req, res) => {

    const main = '/index.html'

    const rs = fs.createReadStream(`.${req.url === '/' ? main : req.url}`)

    if (req.url !== 'favicon.ico') {
        rs.on('data', body => {
            res.end(body)
        })

        rs.on('error', error => {
            logger.error(error)
            res.writeHead(404)
            res.end('NOT FOUND')
        })
    } else {
        logger.error(error)
        res.writeHead(404)
        res.end('NOT FOUND')
    }

    // req.on('error', error => {
    //     logger.error(error)
    //     res.writeHead(404)
    //     res.end('NOT FOUND')
    // })
}

const server = http.createServer(requestListener)

server.listen(port, () => logger.info(`server up and running on port ${port}`));