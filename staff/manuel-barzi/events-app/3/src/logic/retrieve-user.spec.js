const { random } = Math
const { retrieveUser } = require('.')
const { mongoose, models: { User } } = require('events-data')
const jwt = require('jsonwebtoken')

const { env: {
    REACT_APP_TEST_MONGODB_URL: TEST_MONGODB_URL,
    REACT_APP_TEST_JWT_SECRET: TEST_JWT_SECRET
} } = process

fdescribe('retrieveUser', () => {
    beforeAll(() =>
        mongoose.connect(TEST_MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => User.deleteMany())
    )

    let name, surname, email, password, users

    beforeEach(() => {
        name = `name-${random()}`
        surname = `surname-${random()}`
        email = `email-${random()}@mail.com`
        password = `password-${random()}`
    })

    describe('when user already exists', () => {
        let token

        beforeEach(() =>
            User.create({ name, surname, email, password })
                .then(({ id }) => token = jwt.sign({ sub: id }, TEST_JWT_SECRET))
        )

        it('should succeed on correct and valid and right data', () =>
            retrieveUser(token)
                .then(user => {
                    expect(user).toBeDefined()
                    expect(user.name).toBe(name)
                    expect(user.surname).toBe(surname)
                    expect(user.email).toBe(email)
                    expect(user.password).toBeUndefined()
                })
        )
    })

    // TODO more happies and unhappies

    afterAll(() => User.deleteMany().then(() => mongoose.disconnect()))
})