require('dotenv').config()
const TEST_MONGODB_URL = process.env.REACT_APP_TEST_MONGODB_URL
const { createLand, authenticateUser, registerUser } = require('.')
const { random } = Math
const { mongoose, models: { Item, User, Land } } = require('../hoort-data')

describe('createLand', () => {

    beforeAll(async () => {
        await mongoose.connect(TEST_MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        return await Promise.resolve[Item.deleteMany({}), User.deleteMany({}), Item.deleteMany({})]

    })

    let userId, user, name, username, email, password, token,
        nameLand, location, soiltype, scheme, land, landId

    beforeEach(async () => {

        name = 'name-' + Math.random()
        username = 'username-' + Math.random()
        email = Math.random() + '@mail.com'
        password = 'password-' + Math.random()

        await registerUser(name, username, email, password)

        token = await authenticateUser(email, password)

        user = await User.findOne({ email })

        nameLand = `nameLand-${random()}`
        location = `location-${random()}`
        soiltype = `soiltype-${random()}`
        scheme = [[], [], [], [], []]

        for (let j = 0; j < scheme.length; j++)
            for (let i = 0; i < 3; i++) {
                scheme[j].push(false)
            }
    })

    it('should succeed on creating new land if all fields are correctly filled', async () => {

        await createLand(token, nameLand, location, soiltype, scheme)

        land = await Land.findOne({ name: nameLand })

        expect(land.name).toBe(nameLand)
        expect(land.location).toBe(location)
        expect(land.soiltype).toBe(soiltype)
        expect(land.toObject().scheme).toStrictEqual(scheme)
    })

    it('should fail on repeated name from list of user\'s lands', async () => {

        try {
            await createLand(token, nameLand, location, soiltype, scheme)
            await createLand(token, nameLand, `${location}-2`, `${soiltype}-2`, scheme)
        }
        catch (error) {
            expect(error.message).toBe(`You have already created a land with the name ${nameLand}!`)
        }
    })

    afterEach(async () => {
        await User.deleteMany({})
        await Item.deleteMany({})
        return await Land.deleteMany({})
    })

    afterAll(async () => {
        await Promise.resolve[Item.deleteMany({}), User.deleteMany({}), Item.deleteMany({})]
        return await mongoose.disconnect()
    })
})
