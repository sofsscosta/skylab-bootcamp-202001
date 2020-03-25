const logic = require('.')
const { authenticateUser } = logic
const { random } = Math
const { expect } = require('chai')
const AsyncStorage = require('not-async-storage')

const { mongoose, models: { User } } = require('hoort-data')
const bcrypt = require('bcryptjs')

logic.__context__.storage = AsyncStorage

describe('authenticateUser', () => {
    before(async () => {
        await mongoose.connect('mongodb://localhost:27017/test-hoort', { useNewUrlParser: true, useUnifiedTopology: true })
        return await Promise.resolve(User.deleteMany())
    })

    let name, username, email, password

    beforeEach(() => {
        name = `name-${random()}`
        username = `username-${random()}`
        email = `email-${random()}@mail.com`
        password = `password-${random()}`
    })

    describe('when user already exists', () => {
        beforeEach(async () => {
            const _password = await bcrypt.hash(password, 10)

            await User.create(new User({ name, username, email, password: _password }))
        })

        it('should succeed on correct credentials', async () => {

            const returnValue = await authenticateUser({ email, password })

            expect(returnValue).to.be.undefined

            const token = await logic.__context__.storage.getItem('token')

            const [header, payload, signature] = token.split('.')
            expect(header.length).to.be.greaterThan(0)
            expect(payload.length).to.be.greaterThan(0)
            expect(signature.length).to.be.greaterThan(0)

        })

        it('should fail on incorrect password', async () => {
            password = `${password}-wrong`
            try {
                await authenticateUser({ email, password })
                throw new Error('should not reach this point')
            } catch (error) {
                expect(error).to.be.instanceOf(Error)
                expect(error.message).to.equal('wrong credentials')
            }
        })
    })

    it('should fail on incorrect email', async () => {
        email = `wrong-${email}`
        try {
            await authenticateUser({ email, password })
            throw new Error('should not reach this point')

        } catch (error) {
            expect(error).to.be.instanceOf(Error)
            expect(error.message).to.equal('wrong credentials')
        }

    })
    after(async () => {
        await Promise.resolve(User.deleteMany())
        return await mongoose.disconnect()
    })
})