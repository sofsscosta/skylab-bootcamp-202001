require('dotenv').config()

const { env: { TEST_MONGODB_URL } } = process
const { database, database: { ObjectId }, models: { User, Event } } = require('../data')
const { expect } = require('chai')
const { random } = Math
const retrievePublishedEvents = require('./retrieve-published-events')
const createEvent = require('./create-event')

describe('retrievePublishedEvents', () => {
    before(() =>
        database.connect(TEST_MONGODB_URL)
            .then(() => {
                users = database.collection('users')
                events = database.collection('events')
            })
    )

    let name, surname, email, password, users, events, title, description, date, location, eventId1, eventId2, eventId3

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

            return users.insertOne(new User({ name, surname, email, password }))
                .then(({ insertedId }) => id = insertedId.toString())
                .then(() => createEvent(id, title, description, location, date))
                .then(() => events.findOne({ publisher: ObjectId(id), title, description, location, date }))
                .then(event => eventId1 = event._id.toString())
                .then(() => createEvent(id, title1, description1, location1, date1))
                .then(() => events.findOne({ publisher: ObjectId(id), title: title1, description: description1, location: location1, date: date1 }))
                .then(event => eventId2 = event._id.toString())
        })

        it('should succeed on valid id', () => {

            return retrievePublishedEvents(id)
                .then(() =>
                    events.find({ publisher: ObjectId(id) }).toArray()
                )
                .then(events => {
                    expect(events.length).to.equal(2)
                    expect(events[0].title).to.equal(title)
                    expect(events[0].description).to.equal(description)
                    expect(events[0].location).to.equal(location)
                    expect(events[0].date.toString()).to.equal(date.toString())
                    expect(events[1].title).to.equal(title1)
                    expect(events[1].description).to.equal(description1)
                    expect(events[1].location).to.equal(location1)
                    expect(events[1].date.toString()).to.equal(date1.toString())
                })
        })

        it('should fail on incorrect data', () => {
            return retrievePublishedEvents(id)
                .then(() => { throw new Error('should not reach this point') })
                .catch((error) => {
                    expect(error).to.exist
                    expect(error).to.be.an('error')
                })
        })

    })

    after(() => database.disconnect())
})