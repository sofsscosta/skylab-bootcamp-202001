require('dotenv').config()

const { env: { TEST_MONGODB_URL } } = process
const { models: { User, Event } } = require('events-data')
//const { SchemaTypes: { ObjectId } } = require('mongoose')
const { expect } = require('chai')
const { random } = Math
const createEvent = require('./create-event')
const { mongoose } = require('events-data')

describe('createEvent', () => {
    before(() =>
        mongoose.connect(TEST_MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
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
            User.create(new User({ name, surname, email, password }))
                .then((user) => id = user.id)
        )

        it('should succeed on valid data', () => {

            return createEvent(id, title, description, location, date)
                .then(() =>
                    Event.findOne({ title, description, location, date, publisher: id })
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
            Event.deleteOne({ title })
            User.deleteOne({ id })
        })

    })

    // describe('when user does not exist', () => {

    // })


    // TODO more happies and unhappies

    after(() => mongoose.disconnect())
})