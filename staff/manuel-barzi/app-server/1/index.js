const express = require('express')
const logger = require('./utils/logger')
const path = require('path')
const loggerMidWare = require('./utils/logger-mid-ware')
// const staticMidWare = require('./utils/static-mid-ware')

const { argv: [, , port = 8080] } = process

logger.level = logger.DEBUG
logger.path = path.join(__dirname, 'server.log')

logger.debug('setting up server')

const app = express()

app.use(loggerMidWare)

//app.use(staticMidWare(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'public')))

// TRY this from CLI: $ curl http://localhost:8080/authenticate -X POST -d 'hola=mundo'
app.post('/authenticate', (req, res) => {
    let body = ''

    req.on('data', chunk => {
        body += chunk
    })

    req.on('end', () => {
        // DO something with body (debug here, analise it, parse it... etc)

        console.log('body =>', body)

        res.end()
    })
})

app.listen(port, () => logger.info(`server up and running on port ${port}`))

process.on('SIGINT', () => {
    logger.warn(`server abruptly stopped`)

    process.exit(0)
})