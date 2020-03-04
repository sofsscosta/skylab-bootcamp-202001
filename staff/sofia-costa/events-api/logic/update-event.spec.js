// require('dotenv').config()

// const { env: { TEST_MONGODB_URL } } = process
// const { database, database: { ObjectId }, models: { User, Event } } = require('events-data')
// const { expect } = require('chai')
// const { random } = Math
// const updateEvent = require('./update-event')
// const createEvent = require('./create-event')

// describe('updateEvent', () => {
//     before(() =>
//         database.connect(TEST_MONGODB_URL)
//             .then(() => {
//                 users = database.collection('users')
//                 events = database.collection('events')
//             })
//     )

//     let name, surname, email, password, users, events, title, description, date,
//         location, eventId

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
//         let id

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

//             return users.insertOne(new User({ name, surname, email, password }))
//                 .then(({ insertedId }) => id = insertedId.toString())
//                 .then(() => events.insertOne({ publisher: ObjectId(id), title, description, location, date }))
//                 .then(({ insertedId }) => eventId = insertedId.toString())
//         })

//         it('should succeed on valid data and all fields defined', () => {

//             let _title = `title-${random()}`
//             let _description = `description-${random()}`
//             let _date = new Date
//             let _location = `location-${random()}`

//             return updateEvent(id, eventId, _title, _description, _date, _location)
//                 .then(() => events.findOne({ _id: ObjectId(eventId) }))
//                 .then(event => {
//                     expect(event.title).to.equal(_title)
//                     expect(event.description).to.equal(_description)
//                     expect(event.date.toString()).to.equal(_date.toString())
//                     expect(event.location).to.equal(_location)
//                 })
//         })

//         it('should succeed on valid data and some fields defined', () => {
//             let _title = `title-${random()}`
//             let _date = new Date

//             return updateEvent(id, eventId, _title, undefined, _date, undefined)
//                 .then(() => events.findOne({ _id: ObjectId(eventId) }))
//                 .then(event => {
//                     expect(event.title).to.equal(_title)
//                     expect(event.description).to.equal(description)
//                     expect(event.date.toString()).to.equal(_date.toString())
//                     expect(event.location).to.equal(location)
//                 })
//         })

//         it('should not change anything on original object if all updateable fields are undefined', () => {

//             return updateEvent(id, eventId, undefined, undefined, undefined, undefined)
//                 .then(() => events.findOne({ _id: ObjectId(eventId) }))
//                 .then(event => {
//                     expect(event.title).to.equal(title)
//                     expect(event.description).to.equal(description)
//                     expect(event.date.toString()).to.equal(date.toString())
//                     expect(event.location).to.equal(location)
//                 })
//         })

//         it('should fail on incorrect data', () => {

//             let _title = `title-${random()}`
//             let _description = `description-${random()}`
//             let _date = new Date
//             let _location = `location-${random()}`

//             expect(() => {
//                 updateEvent('lololo', 'lalala', _title, _description, _date, _location)
//             }).to.throw(Error, 'Argument passed in must be a single String of 12 bytes or a string of 24 hex characters')
//         })
        

//         afterEach(() => {
//             events.deleteMany({ publisher: ObjectId(id) })
//             users.deleteMany({ name, surname, email, password })
//         })

//     })

//     after(() => database.disconnect())
// })