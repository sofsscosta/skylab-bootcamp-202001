require('dotenv').config()
const logic = require('.')
const { retrieveUser } = logic
const { expect } = require('chai')
const TEST_JWT_SECRET = process.env.JWT_SECRET
const MONGODB_URL = process.env.TEST_MONGODB_URL
const AsyncStorage = require('not-async-storage')
const { mongoose, models: { User } } = require('hoort-data')
const jwt = require('jsonwebtoken')
const { random } = Math

logic.__context__.storage = AsyncStorage


describe('retrieveUser', () => {
    let name, username, email, password, userId


    before(async () => {
        await mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        await logic.__context__.storage.clear()
        return await Promise.resolve(User.deleteMany())
    })

    beforeEach(() => {
        name = 'name-' + random()
        username = 'username-' + random()
        email = random() + '@mail.com'
        password = 'password-' + random()

    })
    describe('when user exists', () => {

        describe('when user is not deactivated', () => {
            beforeEach(async () => {
                const user = await User.create({ name, username, email, password })
                userId = user.id
                const _token = jwt.sign({ sub: user.id }, TEST_JWT_SECRET)
                await logic.__context__.storage.setItem('token', _token)
            })

            it('should succeed on valid id, returning the user', async () => {
                const user = await retrieveUser()

                expect(user.constructor).to.equal(Object)
                expect(user.name).to.equal(name)
                expect(user.username).to.equal(username)
                expect(user.email).to.equal(email)
                expect(user.password).to.be.undefined
            })

            afterEach(async () => {
                await User.deleteMany()
            })

        })

    })

    describe('when user does not exist', () => {
        it('should fail throwing jwt malformed', async () => {
            try {
                debugger
                await retrieveUser()

                throw new Error('should not reach this point')
            } catch (error) {
                expect(error).to.be.an.instanceOf(Error)
                expect(error.message).to.equal(`user with id ${userId} does not exist`)

            }

        })
    })

    after(async () => {
        await User.deleteMany()
        await logic.__context__.storage.clear()
        return await mongoose.disconnect()
    })
})