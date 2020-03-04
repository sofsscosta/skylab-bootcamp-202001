// require('dotenv').config()

// const { env: { TEST_MONGODB_URL } } = process
// const { database, database: { ObjectId }, models: { User, Event } } = require('../data')
// const { expect } = require('chai')
// const { random } = Math
// const deleteEvent = require('./delete-event')
// const createEvent = require('./create-event')
// const subscribeEvent = require('./subscribe-event')

// describe('deleteEvent', () => {
//     before(() =>
//         database.connect(TEST_MONGODB_URL)
//             .then(() => {
//                 users = database.collection('users')
//                 events = database.collection('events')
//             })
//     )

//     let name, surname, email, password, users, events, title, description, date,
//         location, eventId1, eventId2, user, id

//     beforeEach(() => {
//         name = `name-${random()}`
//         surname = `surname-${random()}`
//         email = `email-${random()}@mail.com`
//         password = `password-${random()}`
//         title = `title-${random()}`
//         description = `description-${random()}`
//         date = new Date
//         location = `location-${random()}`
//     })

//     describe('when user already exists', () => {

//         beforeEach(() => {
//             name = `name-${random()}`
//             surname = `surname-${random()}`
//             email = `email-${random()}@mail.com`
//             password = `password-${random()}`
//             title = `title-${random()}`
//             description = `description-${random()}`
//             date = new Date
//             date.setDate(20)
//             location = `location-${random()}`

//             title1 = `title-${random()}`
//             description1 = `description-${random()}`
//             date1 = new Date
//             date1.setDate(10)
//             location1 = `location-${random()}`

//             return users.insertOne(new User({ name, surname, email, password }))
//                 .then(({ insertedId }) => id = insertedId.toString())
//                 .then(() => createEvent(id, title, description, location, date))
//                 .then(() => events.findOne({ publisher: ObjectId(id), title, description, location, date }))
//                 .then(event => eventId1 = event._id.toString())
//                 .then(() => subscribeEvent(id, eventId1))
//                 .then(() => createEvent(id, title1, description1, location1, date1))
//                 .then(() => events.findOne({ publisher: ObjectId(id), title: title1, description: description1, location: location1, date: date1 }))
//                 .then(event => eventId2 = event._id.toString())
//                 .then(() => subscribeEvent(id, eventId2))
//         })

//         it('should delete the event from events database', () => {

//             return deleteEvent(id, eventId1)
//                 .then(() => events.findOne({ _id: ObjectId(eventId1) }))
//                 .then(event => {
//                     expect(event).to.be.a('null')
//                 })
//         })

//         it('should delete the event from the publisher\'s publishedEvents array', () => {

//             return deleteEvent(id, eventId2)
//                 .then(() => users.findOne({ _id: ObjectId(id) }))
//                 .then(user => {
//                     expect(user.publishedEvents).not.to.include(eventId2)
//                 })
//         })

//         it('should delete the event from the event\'s subscribers array from users', () => {
//             return deleteEvent(id, eventId1)
//                 .then(() => users.findOne({ _id: ObjectId(id) }))
//                 .then(user => {
//                     expect(user.subscribedEvents).not.to.include(eventId1)
//                 })
//         })
//     })

//     afterEach(() => {
//         events.deleteMany({ publisher: ObjectId(id) })
//         users.deleteOne({ _id: ObjectId(id) })
//     })

//     after(() => database.disconnect())
// })

// // it('should fail on incorrect data', () => {
// //     expect(() => {
// //         deleteEvent('lalala')
// //     }).to.throw(Error, 'Argument passed in must be a single String of 12 bytes or a string of 24 hex characters')
// // })






