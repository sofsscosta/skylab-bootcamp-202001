const express = require('express')
const logger = require('./utils/logger')
const fs = require('fs')

const { argv: [, , port = 8080] } = process
// logger.setDebugEnabled(true)

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => { 
    debugger
    logger.info(`New request: ${req}`); 
    res.send(req) })

logger.debug('starting server')

const server = app.listen(port, () => { logger.info(`¡¡¡Connected to server on port ${port}!!!!!!!!!!!!!!`) })