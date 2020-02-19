const express = require('express')
const path = require('path')
const logger = require('./utils/logger')
const staticMidWare = require('./utils/static-mid-ware')
const data = require('./data')
const register = require('./logic/register')
const authenticate = require('./logic/authenticate')
const loggerMidWare = require('./utils/logger-mid-ware')

// const {argv: [, , port = 8080]} = process

const app = express()

app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    logger.info(`app running on ${req.url}`)
    res.send(req)
})

app.post('/', (req, res) => {
    logger.info(`app running on ${req.url}`)
    res.send(req)
})

app.listen('8080', () => logger.info(`Example app listening on port ${8080}!`))