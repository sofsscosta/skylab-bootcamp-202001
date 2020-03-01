require('dotenv').config()

const { env: { TEST_MONGODB_URL } } = process
const { database, database: { ObjectId }, models: { User, Event } } = require('../data')
const { expect } = require('chai')
const { random } = Math
const retrieveLastEvents = require('./retrieve-last-events')
const createEvent = require('./create-event')

describe('retrieveLastEvents', () => {
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
                .then(() => createEvent(id, title1, description1, location1, date1))
                .then(() => events.findOne({ publisher: ObjectId(id), title: title1, description: description1, location: location1, date: date1 }))
                .then(event => eventId2 = event._id.toString())
                .then(() => createEvent(id, title2, description2, location2, date2))
                .then(() => events.findOne({ publisher: ObjectId(id), title: title2, description: description2, location: location2, date: date2 }))
                .then(event => eventId3 = event._id.toString())
        })

        it('should succeed on valid id', () => {

            return retrieveLastEvents()
                .then(events => {
                    console.log(events[0]._id.toString())
                    console.log(events[1]._id.toString())
                    console.log(events[2]._id.toString())
                    console.log(events[3]._id.toString())

                    expect(events.length).to.equal(3)
                    expect(events[2]._id.toString()).to.equal(eventId1)
                    expect(events[2].title).to.equal(title)
                    expect(events[2].description).to.equal(description)
                    expect(events[2].location).to.equal(location)
                    expect(events[2].date.toString()).to.equal(date.toString())
                    expect(events[1]._id.toString()).to.equal(eventId2)
                    expect(events[1].title).to.equal(title1)
                    expect(events[1].description).to.equal(description1)
                    expect(events[1].location).to.equal(location1)
                    expect(events[1].date.toString()).to.equal(date1.toString())
                    expect(events[0]._id.toString()).to.equal(eventId3)
                    expect(events[0].title).to.equal(title2)
                    expect(events[0].description).to.equal(description2)
                    expect(events[0].location).to.equal(location2)
                    expect(events[0].date.toString()).to.equal(date2.toString())
                })
        })

        it('should fail on incorrect data', () => {
            return retrieveLastEvents()
                .then(() => { throw new Error('should not reach this point') })
                .catch((error) => {
                    expect(error).to.exist
                    expect(error).to.be.an('error')
                })
        })

        afterEach(() => {
            events.deleteMany({ publisher: ObjectId(id) })
            users.deleteMany({ name, surname, email, password })
        })

    })

    after(() => database.disconnect())
})