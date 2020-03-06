const TEST_MONGODB_URL = process.env.REACT_APP_TEST_MONGODB_URL
const { mongoose, models: { User } } = require('events-data')
const { registerUser } = require('./')
const bcrypt = require('bcryptjs')

describe('registerUser', () => {

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

    it('should succeed on new user', async () => {
        const result = await registerUser(name, surname, email, password)

        expect(result).toBeUndefined()

        const user = await User.findOne({ email })

        expect(typeof user).toBe('object')
        expect(user.name).toBe(name)
        expect(user.surname).toBe(surname)
        expect(user.email).toBe(email)

        let pass = await bcrypt.compare(password, user.password)
        expect(pass).toBe(true)
    })

    it('should fail on already existing user', async () => {

        try{
            await registerUser(name, surname, email, password)
        } catch(error) {
            expect(error).toBe(Error(`user with email "${email}" already exists`))
        }
    })

    afterEach(async () => {
        return await User.deleteOne({ _id: id })
    })

    afterAll(async () => {
        await User.deleteMany()
        return await mongoose.disconnect()
    })
})