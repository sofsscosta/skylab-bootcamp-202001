const TEST_MONGODB_URL = process.env.REACT_APP_TEST_MONGODB_URL
const { mongoose, models: { Event, User } } = require('events-data')
const { createEvent, authenticate } = require('./')
const moment = require('moment')
const bcrypt = require('bcryptjs')

describe('createEvent', () => {
    beforeAll(async () => {
        await mongoose.connect(TEST_MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        await Event.deleteMany()
        return await User.deleteMany()
    })

    let name, surname, email, password, token, users, events, title, description, date, location, eventId

    beforeEach(() => {
        name = `name-${Math.random()}`
        surname = `surname-${Math.random()}`
        email = `email-${Math.random()}@mail.com`
        password = `password-${Math.random()}`
        title = `title-${Math.random()}`
        description = `description-${Math.random()}`
        date = moment().format('YYYY-MM-DD')
        location = `location-${Math.random()}`
    })

    describe('when user already exists', () => {
        let id, _password

        beforeEach(async () => {
            _password = await bcrypt.hash(password, 10)
            let user = await User.create(new User({ name, surname, email, password: _password }))
            token = await authenticate(email, password)
            return id = user.id
        })

        it('should succeed on valid data', async () => {

            let create = await createEvent(token, title, description, location, date.toString())

            expect(create).toBeUndefined()            

            let event = await Event.findOne({ title, description, location, publisher: id })

            eventId = event.id
            expect(event).toBeDefined()
            expect(event.title).toBe(title)
            expect(event.description).toBe(description)
            //expect(event.date).toStrictEqual(date)
            expect(event.location).toBe(location)
            expect(event.publisher.toString()).toBe(id)

        })

        it('should fail on incorrect data', async () => {
        
            try {
                await createEvent(token, 123 , description, location, date)
            } catch(error) {
                expect(error).toBeInstanceOf(TypeError)
                expect(error.message).toBe('title 123 is not a string')
            }
        })

        afterEach(async () => {
            await Event.findOneAndRemove({ _id: eventId })
            return await User.findOneAndRemove({ _id: id })
        })

    })

    afterAll(async () => {
        await User.deleteMany()
        return await mongoose.disconnect()
    })
})