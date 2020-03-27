const { env: { REACT_APP_TEST_MONGODB_URL } } = process

const { updateLandPlantVeggie, updateLandAddVeggie, createLand, registerUser, authenticateUser, createItem } = require('.')
const { mongoose, models: { Land, Item, User } } = require('../hoort-data')
const { random } = Math

describe('updateLandPlantVeggie', () => {

    beforeAll(async () => {
        await mongoose.connect('mongodb://localhost/test-hoort', { useNewUrlParser: true, useUnifiedTopology: true })
        return await Promise.resolve[Item.deleteMany({}), User.deleteMany({}), Item.deleteMany({})]
    })

    let name, username, email, password, token,
        nameLand, location, soiltype, scheme, land, landId
    let veggie, veggieId, colorId, nameVeggie, type, growth, growthDuration, soil, temperature, bestPeriod, lightPreference
    let veggies = [], lands = []

    beforeEach(async () => {

        name = 'name-' + Math.random()
        username = 'username-' + Math.random()
        email = Math.random() + '@mail.com'
        password = 'password-' + Math.random()

        await registerUser(name, username, email, password)

        token = await authenticateUser(email, password)

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

        await createItem(colorId, nameVeggie, type, subtype, growth, growthDuration, soil, temperature, bestPeriod, bestPeriodNum, lightPreference)

        veggie = await Item.findOne({ name: nameVeggie })
        veggieId = veggie.id

        nameLand = `nameLand-${random()}`
        location = `location-${random()}`
        soiltype = `soiltype-${random()}`
        scheme = [[], [], [], [], []]

        for (let j = 0; j < scheme.length; j++)
            for (let i = 0; i < 3; i++) {
                scheme[j].push(false)
            }

        await createLand(token, nameLand, location, soiltype, scheme)

        land = await Land.findOne({ name: nameLand })
        landId = land.id


    })

    it('should plant veggie if veggie is added to land\'s plantation', async () => {

        await updateLandAddVeggie(landId, veggieId, token)

        await updateLandPlantVeggie(landId, veggieId, token)

        land = await Land.findById(landId)

        let plantation = land.plantation.find(plant => plant.veggie.toString() === veggieId.toString())

        expect(land.id).toBe(landId)
        expect(plantation).toBeDefined()
        expect(plantation.to).toBe(null)
        expect(plantation.from).toBeInstanceOf(Date)
    })

    it('should fail if veggie is not already added to land\'s plantation', async () => {

        try {
            await updateLandPlantVeggie(landId, veggieId, token)
        }
        catch (error) {
            expect(error.message).toBeDefined()
        }
    })

    it('should fail if incorrect data is passed', async () => {

        try {
            await updateLandPlantVeggie(`${landId}--wrong`, veggieId, token)
        } catch (error) {
            expect(error).toBeDefined()
        }

        try {
            await updateLandPlantVeggie(`${landId}--wrong`, `${veggieId}--wrong`, token)
        } catch (error) {
            expect(error).toBeDefined()
        }
    })

    afterEach(async () => {
        await Item.deleteMany({})
        await User.deleteMany({})
        await Land.deleteMany({})
    })

    afterAll(async () => {
        await Promise.resolve[Item.deleteMany({}), User.deleteMany({}), Item.deleteMany({})]
        return await mongoose.disconnect()
    })
})