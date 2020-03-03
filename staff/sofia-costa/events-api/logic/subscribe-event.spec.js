require('dotenv').config()

const { env: { TEST_MONGODB_URL } } = process
const { models: { User, Event } } = require('../data')
const { expect } = require('chai')
const { random } = Math
const subscribeEvent = require('./subscribe-event')
const createEvent = require('./create-event')
const mongoose = require('mongoose')
const { SchemaTypes: { ObjectId } } = require('mongoose')

describe('subscribeEvent', () => {
    before(() => {
        mongoose.connect(TEST_MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    })

    let name, surname, email, password, title, description, date,
        location, eventId1, eventId2, eventId3

    beforeEach(() => {
        name = `name-${random()}`
        surname = `surname-${random()}`
        email = `email-${random()}@mail.com`
        password = `password-${random()}`
        title = `title-${random()}`
        description = `description-${random()}`
        date = new Date
        location = `location-${random()}`
    })

    describe('when user already exists', () => {
        let id

        beforeEach(() => {
            name = `name-${random()}`
            surname = `surname-${random()}`
            email = `email-${random()}@mail.com`
            password = `password-${random()}`
            title = `title-${random()}`
            description = `description-${random()}`
            date = new Date
            date.setDate(20)
            location = `location-${random()}`

            title1 = `title-${random()}`
            description1 = `description-${random()}`
            date1 = new Date
            date1.setDate(10)
            location1 = `location-${random()}`

            title2 = `title-${random()}`
            description2 = `description-${random()}`
            date2 = new Date
            date2.setDate(30)
            location2 = `location-${random()}`

            let user = new User({ name, surname, email, password })

            return User.create(user)
                .then(user => id = user.id)
                .then(() => createEvent(id, title, description, location, date))
                .then(() => Event.findOne({ publisher: id, title, description, location, date }))
                .then(event => eventId1 = event.id)
                .then(() => createEvent(id, title1, description1, location1, date1))
                .then(() => Event.findOne({ publisher: id, title: title1, description: description1, location: location1, date: date1 }))
                .then(event => eventId2 = event.id)
                .then(() => createEvent(id, title2, description2, location2, date2))
                .then(() => Event.findOne({ publisher: id, title: title2, description: description2, location: location2, date: date2 }))
                .then(event => eventId3 = event.id)
                .then(() => {})
        })

        it('should succeed on valid id', () => {
            return subscribeEvent(id, eventId1)
                .then(() => User.findById({_id: id}))
                .then(user => {
                    console.log(user)
                    expect(user.subscribedEvents[0].toString()).to.equal(eventId1)
                })
        })

        it('should fail on incorrect data', () => {
            expect(() => {
                subscribeEvent('lololo', 'lalala')
            }).to.throw(Error, 'Argument passed in must be a single String of 12 bytes or a string of 24 hex characters')
        })

        afterEach(() => {
            Event.deleteMany({ publisher: id })
            User.deleteMany({ name, surname, email, password })
        })

    })

    after(() => mongoose.disconnect())
})