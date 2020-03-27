require('dotenv').config()
const TEST_MONGODB_URL = process.env.REACT_APP_TEST_MONGODB_URL
const { retrieveUser, authenticateUser } = require('.')
const { mongoose, models: { User } } = require('../hoort-data')
const fetch = require('node-fetch')
const bcrypt = require('bcryptjs')

describe('retrieveUser', () => {

    beforeAll(async () => {
        await mongoose.connect(TEST_MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        return await Promise.resolve(User.deleteMany({}))
    })

    let name, username, email, password, id

    beforeEach(() => {
        name = 'name-' + Math.random()
        username = 'username-' + Math.random()
        email = Math.random() + '@mail.com'
        password = 'password-' + Math.random()
    })

    describe('when user already exists', () => {
        let token, user

        beforeEach(async () => {
            _password = await bcrypt.hash(password, 10)
            user = await User.create({ name, username, email, password: _password })
            return token = await authenticateUser(email, password)
        })

        afterEach(async () => {
            return await User.findByIdAndRemove(id)
        })

        it('should succeed on correct token', async () => {

            user = await retrieveUser(token)

            expect(user.constructor).toBe(Object)
            expect(user.name).toBe(name)
            expect(user.username).toBe(username)
            expect(user.email).toBe(email)
            expect(user.password).toBeUndefined()
        })

        it('should fail on invalid token', async () => {

            try {
                await retrieveUser(`${token}--wrong`)
            } catch (error) {
                expect(error.message).toBe("invalid signature")
            }

        })
    })

    it('should fail on invalid token format', async () => {
        let error, token

        try {
            token = 1
            error = await retrieveUser(token)
        } catch (error) {
            expect(error).toBeInstanceOf(TypeError)
            expect(error.message).toBe('token 1 is not a string')
        }

        try {
            token = true
            error = await retrieveUser(token)
        } catch (error) {
            expect(error).toBeInstanceOf(TypeError)
            expect(error.message).toBe('token true is not a string')
        }

        try {
            token = undefined
            error = await retrieveUser(token)
        } catch (error) {
            expect(error).toBeInstanceOf(TypeError)
            expect(error.message).toBe('token undefined is not a string')
        }
    })

    afterAll(async () => {
        await Promise.resolve(User.deleteMany({}))
        return await mongoose.disconnect()
    })
})