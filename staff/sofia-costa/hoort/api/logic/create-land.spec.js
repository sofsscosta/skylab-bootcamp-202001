require('dotenv').config()

const { env: { TEST_MONGODB_URL } } = process
const { models: { User, Land } } = require('data')
//const { SchemaTypes: { ObjectId } } = require('mongoose')
const { expect } = require('chai')
const { random } = Math
const createLand = require('./create-land')
const { mongoose } = require('data')

describe('createLand', () => {
    before(() =>
        mongoose.connect(TEST_MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    )

    let id, veggiesId, name, userId, location, soiltype, scheme, nameUser, username, email, password

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
            .then(() => {})

    })

    it('should succeed on valid data', () => {

        return createLand(name, userId, location, soiltype, scheme)
            .then(() => Land.findOne({ name }) )
            .then(item => {
                expect(item).to.exist
                id = item.id
                expect(item.name).to.equal(name)
                expect(item.userId.toString()).to.equal(userId)
                expect(item.location).to.equal(location)
                expect(item.soiltype).to.equal(soiltype)
                expect(item.scheme).to.eql(scheme)              
            })
            .then(() => User.findOne({ lands : id }))
            .then(user => {
                expect(user).to.exist
                expect(user.lands).to.include(id)
            })
    })

    it('should not fail on not defined scheme', () => {
        return createLand(name, userId, location, soiltype, scheme)
            .then(() => Land.findOne({ name }) )
            .then(item => {
                id = item.id
                expect(item.scheme).to.eql(scheme)
            })
    })

    it('should fail on not all fields defined except scheme', () => {
        expect(() => {
            return createLand(name, userId, location)
        }).to.throw(TypeError, 'soiltype undefined is not a string' )
    })

    it('should fail on repeated name', () => {

        return createLand(name, userId, location, soiltype, scheme)
        .then(() => createLand(name, userId, location, soiltype, scheme))
        .then(() => {throw new Error ('should not reach this point')})
        .catch(error => {
            expect(error).to.exist
            expect(error.message).to.eql(`You have already created a land with the name ${name}!`)
        })
    })

    afterEach(() => {
        Land.findByIdAndRemove({ id })
    })

    after(() => mongoose.disconnect())
})