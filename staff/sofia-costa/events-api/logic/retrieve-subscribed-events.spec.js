require('dotenv').config()

const { env: { TEST_MONGODB_URL } } = process
const { database, database: { ObjectId }, models: { User, Event } } = require('../data')
const { expect } = require('chai')
const { random } = Math
const retrieveSubscribedEvents = require('./retrieve-subscribed-events')
const createEvent = require('./create-event')
const subscribeEvent = require('./subscribe-event')

describe('retrieveSubscribedEvents', () => {
    before(() =>
        database.connect(TEST_MONGODB_URL)
            .then(() => {
                users = database.collection('users')
                events = database.collection('events')
            })
    )

    let name, surname, email, password, users, events, title, description, date, 
    location, eventId1, eventId2, eventId3, user

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

            return users.insertOne(new User({ name, surname, email, password }))
                .then(({ insertedId }) => id = insertedId.toString())
                .then(() => createEvent(id, title, description, location, date))
                .then(() => events.findOne({ publisher: ObjectId(id), title, description, location, date }))
                .then(event => eventId1 = event._id.toString())
                .then(() => subscribeEvent(id, eventId1))
                .then(() => createEvent(id, title1, description1, location1, date1))
                .then(() => events.findOne({ publisher: ObjectId(id), title: title1, description: description1, location: location1, date: date1 }))
                .then(event => eventId2 = event._id.toString())
                .then(() => subscribeEvent(id, eventId2))
                .then(() => createEvent(id, title2, description2, location2, date2))
                .then(() => events.findOne({ publisher: ObjectId(id), title: title2, description: description2, location: location2, date: date2 }))
                .then(event => eventId3 = event._id.toString())
                .then(() => subscribeEvent(id, eventId3))
        })

        it('should succeed on valid id', () => {

            return retrieveSubscribedEvents(id)
                .then(events => {
                    return users.findOne({_id: ObjectId(id)})
                    .then(user => {
                        expect(events.length).to.equal(user.subscribedEvents.length)
                        expect(user.subscribedEvents[0].toString()).to.equal(eventId1)
                        expect(user.subscribedEvents[1].toString()).to.equal(eventId2)
                        expect(user.subscribedEvents[2].toString()).to.equal(eventId3)
                    })
                })
        })

        it('should fail on incorrect data', () => {
            expect(() => {
                retrieveSubscribedEvents('lalala')
            }).to.throw(Error, 'Argument passed in must be a single String of 12 bytes or a string of 24 hex characters')
        })

        afterEach(() => {
            events.deleteMany({ publisher: ObjectId(id) })
            users.deleteOne({ _id: ObjectId(id) })
        })

    })

    after(() => database.disconnect())
})