// require('dotenv').config()

// const { env: { TEST_MONGODB_URL } } = process
// const { retrieveLand, createLand } = require('.')
// const chai = require('chai')
// const { mongoose } = require('data')
// const { models: { User, Land } } = require('data')
// const expect = chai.expect
// const { random } = Math
// const { NotFoundError, NotAllowedError } = require('errors')

// describe('retrieveLand', () => {

//     before(() => {
//         mongoose.connect(TEST_MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//     })

//     let userId, landId, veggiesId, name, location, soiltype, scheme, nameUser, username, email, password

//     beforeEach(() => {
//         nameUser = `nameUser-${random()}`
//         username = `username-${random()}`
//         email = `email-${random()}@mail.com`
//         password = `password-${random()}`

//         name = `name-${random()}`
//         location = `location-${random()}`
//         soiltype = `soiltype-${random()}`

//         veggiesId = []

//         for (let i = 0; i<10; i++)
//             veggiesId.push(`veggies-${random()}`)
        
//         scheme = [[], [], [], [], []]

//         for (let arr of scheme) {
//             if  (arr === 0) for (let j = 0; j<3; j++) arr.push(false)

//             else for (let j = 0; j<3; j++)
//                 arr.push(veggiesId[j])
//         }

//         return User.create({ name: nameUser, username, email, password })
//             .then(user => userId = user.id)
//             .then(() => createLand(name, userId, location, soiltype, scheme))
//             .then(() => Land.findOne({ name }))
//             .then(land => landId = land.id)

//     })

//     it('should succeed on correct data', () =>
//         retrieveLand(userId, landId)
//             .then(item => {
//                 expect(item.constructor).to.equal(Object)
//                 expect(item.name).to.equal(name)
//                 expect(item.location).to.equal(location)
//                 expect(item.soiltype).to.equal(soiltype)
//                 expect(item.scheme).to.eql(scheme)
//             })
//     )

//     it('should fail on invalid id', () =>
//         expect(() => {
//             retrieveLand(userId, `${landId}--wrong`)
//                 .then(() => { throw new Error('should not reach this point') })
//                 .catch((error) => {
//                     expect(error).to.eql(NotFoundError, `user with id ${id} does not exist`)
//                 })
//         })
//     )

//     afterEach(() => {
//         return Land.deleteOne({ landId })
//             .then(() => User.deleteOne({ userId }))
//             .then(() => { })
//     })

//     after(() => mongoose.disconnect())
// })