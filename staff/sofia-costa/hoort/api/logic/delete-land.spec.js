require('dotenv').config()

const { env: { TEST_MONGODB_URL } } = process
const { deleteLand, createLand } = require('.')
const chai = require('chai')
const { random } = Math
const { mongoose } = require('data')
const { models: { User, Land } } = require('data')
const expect = chai.expect
const { NotFoundError, NotAllowedError } = require('errors')
const bcrypt = require('bcryptjs')

describe('deleteLand', () => {

    before(() => {
        mongoose.connect(TEST_MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    })

    let userId, otherUserId, landId, veggiesId, name, location, soiltype, scheme, nameUser, username, email, password

    beforeEach(() => {
        nameUser = `nameUser-${random()}`
        username = `username-${random()}`
        email = `email-${random()}@mail.com`
        password = `password-${random()}`

        name = `name-${random()}`
        location = `location-${random()}`
        soiltype = `soiltype-${random()}`

        veggiesId = []

        for (let i = 0; i<10; i++)
            veggiesId.push(`veggies-${random()}`)
        
        scheme = [[], [], [], [], []]

        for (let arr of scheme) {
            if  (arr === 0) for (let j = 0; j<3; j++) arr.push(false)

            else for (let j = 0; j<3; j++)
                arr.push(veggiesId[j])
        }

        return User.create({ name: nameUser, username, email, password })
            .then(user => userId = user.id)
            .then(() => createLand(name, userId, location, soiltype, scheme))
            .then(() => Land.findOne({ name, userId, location, soiltype, scheme }))
            .then(land => landId = land.id)

    })

    it('should succeed on correct id', () => {
        
        return deleteLand(userId, landId)
            .then(() => Land.findById(landId))
            .then(land => expect(land).to.be.null)
    })

    it('should fail on land created by another user', () => {
        return User.create({ name: nameUser, username, email, password })
            .then(user => otherUserId = user.id)
            .then(() => deleteLand(otherUserId, landId))
            .then(() => { throw new Error('should not reach this point')})
            .catch(error => {
                expect(error.message).to.eql('wrong credentials')
            })
    })

    afterEach(() => {
        Land.findByIdAndRemove(landId)
        User.findByIdAndRemove(userId)
    })

    after(() => {
        mongoose.disconnect()
    })

})