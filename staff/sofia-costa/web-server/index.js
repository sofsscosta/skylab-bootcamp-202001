const express = require('express')
// const port = 8080
const logger = require('./utils/logger')
const path = require('path')

// const {argv: [, , port = 8080]} = process

const app = express()

app.use('/', express.static(path.join(__dirname, 'public')))

// app.get('/', (req, res) => {
//     logger.info('app running')
//     res.send(req)
// })

app.listen('8080', () => logger.info(`Example app listening on port ${8080}!`))