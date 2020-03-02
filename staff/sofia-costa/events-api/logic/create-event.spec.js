require('dotenv').config()

const { env: { TEST_MONGODB_URL } } = process
const { database, database: { ObjectId }, models: { User, Event } } = require('../data')
const { expect } = require('chai')
const { random } = Math
const createEvent = require('./create-event')

describe('createEvent', () => {
    before(() =>
        database.connect(TEST_MONGODB_URL)
            .then(() => {
                users = database.collection('users')
                events = database.collection('events')
            })
    )

    let name, surname, email, password, users, events, title, description, date, location

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

        beforeEach(() =>
            users.insertOne(new User({ name, surname, email, password }))
                .then(({ insertedId }) => id = insertedId.toString())
        )

        it('should succeed on valid data', () => {

            return createEvent(id, title, description, location, date)
                .then(() =>
                    events.findOne({ title, description, location, date, publisher: ObjectId(id) })
                )
                .then(event => {
                    expect(event).to.exist
                    expect(event.title).to.equal(title)
                    expect(event.description).to.equal(description)
                    expect(event.date).to.deep.equal(date)
                    expect(event.location).to.equal(location)
                    expect(event.publisher.toString()).to.equal(id)
                })
        })

        it('should fail on incorrect data', () => {
            return createEvent(id, `${title}-wrong`, description, location, date)
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

    // describe('when user does not exist', () => {

    // })


    // TODO more happies and unhappies

    after(() => database.disconnect())
})