require('dotenv').config()

const { env: { PORT = 8080, NODE_ENV: env, MONGODB_URL }, argv: [, , port = PORT] } = process

const express = require('express')
const winston = require('winston')
const { registerUser, authenticateUser, retrieveUser, updateUser, deleteUser, createItem, 
    retrieveItem, searchItems, createLand, retrieveLand, deleteLand, searchReccommended, 
    changeDivisions } = require('./routes')
const { name, version } = require('./package')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const fs = require('fs')
const path = require('path')
const { jwtVerifierMidWare } = require('./mid-wares')
const { mongoose } = require('data')
const cors = require('cors')


mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {

        const logger = winston.createLogger({
            level: env === 'development' ? 'debug' : 'info',
            format: winston.format.json(),
            transports: [
                new winston.transports.File({ filename: 'server.log' })
            ]
        })

        if (env !== 'production') {
            logger.add(new winston.transports.Console({
                format: winston.format.simple()
            }))
        }

        const jsonBodyParser = bodyParser.json()

        const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

        const app = express()

        app.use(cors())

        app.use(morgan('combined', { stream: accessLogStream }))

        app.post('/users', jsonBodyParser, registerUser)

        app.post('/users/auth', jsonBodyParser, authenticateUser)

        app.get('/users', jwtVerifierMidWare, retrieveUser)

        app.patch('/users', [jwtVerifierMidWare, jsonBodyParser], updateUser)

        app.delete('/users/delete', [jwtVerifierMidWare, jsonBodyParser], deleteUser)

        app.post('/items', jsonBodyParser, createItem)

        app.get('/item/:userId?', jsonBodyParser, retrieveItem)

        app.get('/allitems', jsonBodyParser, searchItems)

        app.post('/land', [jwtVerifierMidWare, jsonBodyParser], createLand)

        app.get('/land', [jwtVerifierMidWare, jsonBodyParser], retrieveLand)

        app.patch('/land/divisions', jsonBodyParser, changeDivisions)
        
        app.delete('/land', [jwtVerifierMidWare, jsonBodyParser], deleteLand)

        app.get('/items/reccommended', searchReccommended)

        app.listen(port, () => logger.info(`server ${name} ${version} up and running on port ${port}`))

        process.on('SIGINT', () => {
            logger.info('server abruptly stopped')

            process.exit(0)
        })
    })