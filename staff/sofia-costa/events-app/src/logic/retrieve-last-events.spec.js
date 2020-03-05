const TEST_MONGODB_URL = process.env.REACT_APP_TEST_MONGODB_URL
const { mongoose, models: { Event, User } } = require('events-data')
const { createEvent, authenticate, retrieveLastEvents } = require('./')

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

            user = await User.create(new User({ name, surname, email, password }))
            id = user.id

            token = await authenticate(email, password)

            await createEvent(token, title, description, location, new Date(date))
            let event1 = await Event.findOne({ publisher: id, title, description, location, date })
            eventId1 = event1.id

            await createEvent(token, title1, description1, location1, new Date(date1))
            let event2 = await Event.findOne({ publisher: id, title: title1, description: description1, location: location1, date: date1 })
            eventId2 = event2.id

            await createEvent(token, title2, description2, location2, new Date(date2))
            let event3 = await Event.findOne({ publisher: id, title: title2, description: description2, location: location2, date: date2 })
            eventId3 = event3.id
        })

        afterEach(async () => {
            return await User.deleteOne({ _id: id })
        })

        it('should succeed', async () => {

            events = await retrieveLastEvents()
            console.log(events)
            expect(events.length).toBe(3)
            expect(events[0].id).toBe(eventId2)
            expect(events[0].title).toBe(title1)
            expect(events[0].description).toBe(description1)
            expect(events[0].location).toBe(location1)
            //expect(events[0].date.toString()).toBe(date1.toString())
            expect(events[1].id).toBe(eventId1)
            expect(events[1].title).toBe(title)
            expect(events[1].description).toBe(description)
            expect(events[1].location).toBe(location)
            //expect(events[1].date.toString()).toBe(date.toString())
            expect(events[2].id).toBe(eventId3)
            expect(events[2].title).toBe(title2)
            expect(events[2].description).toBe(description2)
            expect(events[2].location).toBe(location2)
            //expect(events[0].date.toString()).toBe(date2.toString())

        })
    })

    it('should show a message of no results if there are none', async () => {
        try {
            await retrieveLastEvents()
        } catch (error) {
            expect(error).toBe(`No Events have been published recently!`)
        }


    })

    afterAll(async () => {
        await User.deleteMany()
        await Event.deleteMany()
        return await mongoose.disconnect()
    })
})