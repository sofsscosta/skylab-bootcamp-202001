const TEST_MONGODB_URL = process.env.REACT_APP_TEST_MONGODB_URL
const { mongoose, models: { Event, User } } = require('events-data')
const { createEvent, authenticate, retrievePublished } = require('./')
const bcrypt = require('bcryptjs')

describe('retrieveLastEvents', () => {

    beforeAll(async () => {
        await mongoose.connect(TEST_MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        await Event.deleteMany()
        return await User.deleteMany()
    })

    let name, surname, email, password, users, user, token, events, 
    title, description, date, location, 
    title1, description1, date1, location1, 
    title2, description2, date2, location2, 
    eventId1, eventId2, eventId3

    describe('when there are published events', () => {
        let id

        beforeEach(async () => {
            name = `name-${Math.random()}`
            surname = `surname-${Math.random()}`
            email = `email-${Math.random()}@mail.com`
            password = `password-${Math.random()}`

            title = `title-${Math.random()}`
            description = `description-${Math.random()}`
            date = new Date
            date.setDate(20)
            location = `location-${Math.random()}`

            title1 = `title-${Math.random()}`
            description1 = `description-${Math.random()}`
            date1 = new Date
            date1.setDate(10)
            location1 = `location-${Math.random()}`

            title2 = `title-${Math.random()}`
            description2 = `description-${Math.random()}`
            date2 = new Date
            date2.setDate(30)
            location2 = `location-${Math.random()}`

            let _password = await bcrypt.hash(password, 10)

            user = await User.create(new User({ name, surname, email, password: _password }))
            id = user.id

            token = await authenticate(email, password)

            await createEvent(token, title, description, location, date.toString())
            let event1 = await Event.findOne({ publisher: id, title, description, location })
            eventId1 = event1.id

            await createEvent(token, title1, description1, location1, date1.toString())
            let event2 = await Event.findOne({ publisher: id, title: title1, description: description1, location: location1 })
            eventId2 = event2.id

        })

        afterEach(async () => {
            return await User.deleteOne({ _id: id })
        })

        it('should succeed on valid id', async () => {

            let events = await retrievePublished(token)

            let event = await Event.find({ publisher: id })

            expect(events.length).toBe(2)
            expect(events[0].publisher.toString()).toBe(id)
            expect(events[0].title).toBe(title)
            expect(events[0].description).toBe(description)
            expect(events[0].location).toBe(location)
            //expect(events[0].date.toString()).toBe(date.toString())
            expect(events[1].publisher.toString()).toBe(id)
            expect(events[1].title).toBe(title1)
            expect(events[1].description).toBe(description1)
            expect(events[1].location).toBe(location1)
            //expect(events[1].date.toString()).toBe(date1.toString())
        })
    })

    // it('should show a message of no results if there are none', async () => {
    //     try {
    //         await retrieveLastEvents()
    //     } catch (error) {
    //         expect(error).toBe(`No Events have been published recently!`)
    //     }


    // })

    afterAll(async () => {
        await User.deleteMany()
        await Event.deleteMany()
        return await mongoose.disconnect()
    })
})









        // it('should fail on incorrect id', () => {
        //     //expect(() =>
        //         retrievePublished('lololo')
        //         .then(() => {throw new Error('should not reach this point')})
        //         .catch((error) => {
        //             expect(error).to.be.an('error')
        //         })
        //     //).to.throw(Error, 'Argument passed in must be a single String of 12 bytes or a string of 24 hex characters')

        // })

        // it('should fail on incorrect id format', () => {

        //     expect(() =>
        //         retrievePublished(true)
        //     ).to.throw(TypeError, 'id true is not a string')

        // })