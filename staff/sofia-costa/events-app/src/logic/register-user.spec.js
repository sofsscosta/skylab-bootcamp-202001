//require('dotenv').config()

//const { env: { REACT_APP_TEST_MONGODB_URL: TEST_MONGODB_URL } } = process
const TEST_MONGODB_URL = process.env.REACT_APP_TEST_MONGODB_URL
debugger
const { mongoose, models: { User } } = require('events-data')
//const { NotAllowedError } = require('events-errors')
const { registerUser } = require('./')

describe('registerUser', () => {

    beforeAll(async () => {
        await mongoose.connect(TEST_MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        await User.deleteMany()
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
        debugger
        expect(result).toBeUndefined()

        const user = await User.findOne({ email })

        expect(typeof user).toBe('object')
        expect(user.name).toBe(name)
        expect(user.surname).toBe(surname)
        expect(user.email).toBe(email)
        expect(user.password).toBe(password)
    })

    it('should fail on already existing user', () => {
        expect(() =>
            registerUser(name, surname, email, password)
                .then(error => {
                    expect(error).to.eql(Error(`user with email "${email}" already exists`))
                })
        )
    })

    // afterEach(() => {
    //     User.deleteOne({ _id: id })
    // })

    afterAll(async () => {
        // await User.deleteMany()
        await mongoose.disconnect()
    })
})