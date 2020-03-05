const TEST_MONGODB_URL = process.env.REACT_APP_TEST_MONGODB_URL
const { retrieveUser, authenticate } = require('.')
const { mongoose, models: { User } } = require('events-data')

describe('retrieveUser', () => {

    beforeAll(async () => {
        await mongoose.connect(TEST_MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        return await User.deleteMany()
    })

    let name, surname, email, password, id

    beforeEach(() => {
        name = 'name-' + Math.random()
        surname = 'surname-' + Math.random()
        email = Math.random() + '@mail.com'
        password = 'password-' + Math.random()
    })

    describe('when user already exists', () => {
        let token, user

        beforeEach(async () => {
            user = await User.create({ name, surname, email, password })
            return token = await authenticate(email, password)
        })

        afterEach(async () => {
            return await User.deleteOne({ _id: id })
        })

        it('should succeed on correct token', async () => {

            user = await retrieveUser(token)

            expect(user.constructor).toBe(Object)
            expect(user.name).toBe(name)
            expect(user.surname).toBe(surname)
            expect(user.email).toBe(email)
            expect(user.password).toBeUndefined()
        })

        it('should fail on invalid token', async () => {

            let error = await retrieveUser(`${token}--wrong`)

            expect(error.error).toBe(`invalid signature`)

        })
    })

    it('should fail on invalid token format', async () => {
        let error, token

        try {
            token = 1
            error = await retrieveUser(token)
        } catch(error) {
            expect(error).toBeInstanceOf(TypeError)
            expect(error.message).toBe('token 1 is not a string')
        }

        try {
            token = true
            error = await retrieveUser(token)
        } catch(error) {
            expect(error).toBeInstanceOf(TypeError)
            expect(error.message).toBe('token true is not a string')
        }

        try {
            token = undefined
            error = await retrieveUser(token)
        } catch(error) {
            expect(error).toBeInstanceOf(TypeError)
            expect(error.message).toBe('token undefined is not a string')
        }
    })

    afterAll(async () => {
        await User.deleteMany()
        return await mongoose.disconnect()
    })
})