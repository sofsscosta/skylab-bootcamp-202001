require('dotenv').config()

const { env: { PORT = 8080, NODE_ENV: env, MONGODB_URL }, argv: [, , port = PORT] } = process

const express = require('express')
const winston = require('winston')
const { registerUser, authenticateUser, retrieveUser, createEvent, retrievePublishedEvents, retrieveLastEvents, subscribeEvent, retrieveSubscribedEvents, updateEvent, deleteEvent } = require('./routes')
const { name, version } = require('./package')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const fs = require('fs')
const path = require('path')
const { jwtVerifierMidWare } = require('./mid-wares')
const { mongoose } = require('events-data')
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

        app.get('/users', jwtVerifierMidWare, retrieveUser)

        app.post('/users/auth', jsonBodyParser, authenticateUser)

        app.post('/users/:id/events', [jwtVerifierMidWare, jsonBodyParser], createEvent)

        app.get('/events/:id', [jwtVerifierMidWare, jsonBodyParser], retrievePublishedEvents)

        app.get('/eventslast', retrieveLastEvents)

        app.patch('/users/events', [jwtVerifierMidWare, jsonBodyParser], subscribeEvent)

        app.get('/users/events/subscribed', [jwtVerifierMidWare, jsonBodyParser], retrieveSubscribedEvents)

        app.patch('/users/events/edit', [jwtVerifierMidWare, jsonBodyParser], updateEvent)

        app.delete('/users/events/delete', [jwtVerifierMidWare, jsonBodyParser], deleteEvent)

        app.listen(port, () => logger.info(`server ${name} ${version} up and running on port ${port}`))

        process.on('SIGINT', () => {
            logger.info('server abruptly stopped')

            process.exit(0)
        })
    })