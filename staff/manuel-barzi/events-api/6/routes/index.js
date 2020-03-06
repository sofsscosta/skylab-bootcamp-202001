const { Router } = require('express')
const {
    registerUser,
    authenticateUser,
    retrieveUser,
    publishEvent,
    retrieveLastEvents,
    retrievePublishedEvents,
    subscribeEvent
} = require('./handlers')
const { jwtVerifierMidWare } = require('../mid-wares')
const bodyParser = require('body-parser')

const jsonBodyParser = bodyParser.json()

const router = new Router()

router.post('/users', jsonBodyParser, registerUser)

router.post('/users/auth', jsonBodyParser, authenticateUser)

router.get('/users', jwtVerifierMidWare, retrieveUser)

router.post('/users/:id/events', [jwtVerifierMidWare, jsonBodyParser], publishEvent)

router.get('/events', jwtVerifierMidWare, retrieveLastEvents)

router.get('/users/:id/events/published', jwtVerifierMidWare, retrievePublishedEvents)

router.post('/users/:id/events/:eventId', jwtVerifierMidWare, subscribeEvent)

module.exports = router