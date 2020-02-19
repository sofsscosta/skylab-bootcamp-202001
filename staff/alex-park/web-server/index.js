const express = require('express')
const logger = require('./utils/logger')
const path = require('path')
const loggerMidWare = require('./utils/looger-mid-ware')

const { argv: [, , port = 8080] } = process

logger.level = logger.INFO
logger.path = path.join(__dirname, 'server.log')

const app = express()

app.use(loggerMidWare)

app.use(express.static(path.join(__dirname, 'public')))

logger.debug('starting server')
app.listen(port, () => { logger.info(`Connected to server on port ${port}`) })

process.on('SIGINT', () => { logger.warn(`server abruptly stopped`); process.exit(0) })