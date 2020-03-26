const TEST_MONGODB_URL = process.env.REACT_APP_TEST_MONGODB_URL
const { retrieveItemForUser, updateLandAddVeggie, createLand, authenticateUser, registerUser, retrieveUser, updateLandPlantVeggie } = require('.')
const { random } = Math
const { mongoose, models: { Item, User, Land } } = require('../hoort-data')
const bcrypt = require('bcryptjs')

describe('retrieveItemForUser', () => {

    beforeAll(async () => {
        await mongoose.connect('mongodb://localhost/test-hoort', { useNewUrlParser: true, useUnifiedTopology: true })
        return await Promise.resolve[Item.deleteMany({}), User.deleteMany({}), Item.deleteMany({})]

    })

    let colorId, nameVeggie, type, growth, growthDuration, soil, temperature, bestPeriod, lightPreference,
        userId, user, name, username, email, password, token,
        nameLand, location, soiltype, scheme, land, landId

    let veggies = [], lands = []

    beforeEach(async () => {

        type = 'type'
        for (let i = 0; i < 10; i++) {

            colorId = `colorId-${random()}`
            nameVeggie = `name-${random()}`
            type = `type-${random()}`
            subtype = `subtype-${random()}`
            growth = `growth-${random()}@mail.com`
            growthDuration = `growthDuration-${random()}`
            soil = `soil-${random()}`
            temperature = `temperature-${random()}`
            bestPeriod = `bestPeriod-${random()}`
            bestPeriodNum = [1, 2, 3]
            lightPreference = `lightPreference-${random()}`

            let veggie = new Item({ colorId, name: nameVeggie, type, subtype, growth, growthDuration, soil, temperature, bestPeriod, bestPeriodNum, lightPreference })
            veggies.push(veggie)
        }

        await Item.insertMany(veggies)

        name = 'name-' + Math.random()
        username = 'username-' + Math.random()
        email = Math.random() + '@mail.com'
        password = 'password-' + Math.random()

        await registerUser(name, username, email, password)

        token = await authenticateUser(email, password)

        let user = retrieveUser(token)

        for (let i = 0; i < 10; i++) {
            nameLand = `nameLand-${random()}`
            location = `location-${random()}`
            soiltype = `soiltype-${random()}`
            scheme = [[], [], [], [], []]

            for (let j = 0; j < scheme.length; j++)
                for (let i = 0; i < 3; i++) {
                    scheme[j].push(veggies[i].id)
                }

            await createLand(token, nameLand, location, soiltype, scheme)

            land = await Land.findOne({ name: nameLand })
            landId = land.id


            for (let j = 0; j < veggies.length; j++) {

                await updateLandAddVeggie(landId, veggies[j].id, token)
                await updateLandPlantVeggie(landId, veggies[j].id, token)
            }
            lands.push(land)
        }
    })

    //describe('when item is neither planted nor harvested', () => {

    it('should succeed on correct data', async () => {
        for (let i = 0; i < veggies.length; i++) {
            for (let j = 0; j < lands.length; j++) {
                let item = await retrieveItemForUser(token, veggies[i].id)

                expect(item).toBeInstanceOf(Object)
                expect(item[0][1][j]).toBe(lands[j].id)
                expect(item[1][1]).toBeDefined()
            }
        }
    })

    it('should fail on invalid token', async () => {

        try {
            await retrieveItemForUser(`${token}--wrong`, veggies[0].id)
        }
        catch (error) {
            expect(error.message).toBe(`user with id ${id} does not exist`)
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