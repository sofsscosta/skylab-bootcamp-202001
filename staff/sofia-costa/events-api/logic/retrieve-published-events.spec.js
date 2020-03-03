require('dotenv').config()

const { env: { TEST_MONGODB_URL } } = process
const { models: { User, Event } } = require('../data')
const { expect } = require('chai')
const { random } = Math
const retrievePublishedEvents = require('./retrieve-published-events')
const createEvent = require('./create-event')
const mongoose = require('mongoose')
const { Schema, SchemaTypes: { ObjectId } } = require('mongoose')

describe('retrievePublishedEvents', () => {
    before(() =>
        mongoose.connect(TEST_MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    )

    let name, surname, email, password, users, events, title, description, date, 
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
            location = `location-${random()}`

            title1 = `title-${random()}`
            description1 = `description-${random()}`
            date1 = new Date
            location1 = `location-${random()}`

            let user = new User({ name, surname, email, password })

            return User.create(user)
                .then(user => id = user.id)
                .then(() => createEvent(id, title, description, location, date))
                .then(() => Event.findOne({ publisher: id, title, description, location, date }))
                .then(event => eventId1 = event.id)
                .then(() => createEvent(id, title1, description1, location1, date1))
                .then(() => Event.findOne({ publisher: id, title: title1, description: description1, location: location1, date: date1 }))
                .then(event => eventId2 = event.id)
        })

        it('should succeed on valid id', () => {

            return retrievePublishedEvents(id)
                .then(() =>
                    Event.find({ publisher: id })
                )
                .then(events => {
                    expect(events.length).to.equal(2)
                    expect(events[0].publisher.toString()).to.equal(id)
                    expect(events[0].title).to.equal(title)
                    expect(events[0].description).to.equal(description)
                    expect(events[0].location).to.equal(location)
                    expect(events[0].date.toString()).to.equal(date.toString())
                    expect(events[1].publisher.toString()).to.equal(id)
                    expect(events[1].title).to.equal(title1)
                    expect(events[1].description).to.equal(description1)
                    expect(events[1].location).to.equal(location1)
                    expect(events[1].date.toString()).to.equal(date1.toString())
                })
        })

        it('should fail on incorrect id', () => {
            //expect(() =>
                retrievePublishedEvents('lololo')
                .then(() => {throw new Error('should not reach this point')})
                .catch((error) => {
                    expect(error).to.be.an('error')
                })
            //).to.throw(Error, 'Argument passed in must be a single String of 12 bytes or a string of 24 hex characters')

        })

        it('should fail on incorrect id format', () => {

            expect(() =>
                retrievePublishedEvents(true)
            ).to.throw(TypeError, 'id true is not a string')

        })

        afterEach(() => {
            Event.deleteMany({ publisher: id })
            User.deleteMany({ name, surname, email, password })
        })

    })

    after(() => mongoose.disconnect())
})