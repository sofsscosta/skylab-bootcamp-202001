const TEST_MONGODB_URL = process.env.REACT_APP_TEST_MONGODB_URL
const { retrieveUserPlantations, updateLandAddVeggie, createLand, authenticateUser, registerUser, retrieveUser, updateLandPlantVeggie } = require('.')
const { random } = Math
const { mongoose, models: { Item, User, Land } } = require('../hoort-data')
const bcrypt = require('bcryptjs')

describe('retrieveUserPlantations', () => {

    beforeAll(async () => {
        await mongoose.connect('mongodb://localhost/test-hoort', { useNewUrlParser: true, useUnifiedTopology: true })
        return await Promise.resolve[Item.deleteMany({}), User.deleteMany({}), Item.deleteMany({})]
    })

    let userId, user, name, username, email, password, token

    beforeEach(async () => {

        name = 'name-' + Math.random()
        username = 'username-' + Math.random()
        email = Math.random() + '@mail.com'
        password = 'password-' + Math.random()

        await registerUser(name, username, email, password)

        token = await authenticateUser(email, password)

        let user = retrieveUser(token)
    })

    describe('when user has lands', () => {
        let colorId, nameVeggie, type, growth, growthDuration, soil, temperature, bestPeriod, lightPreference,
            nameLand, location, soiltype, scheme, land, landId

        let veggies = [], lands = [], plantations = []

        beforeEach(async () => {
            type = 'type'
            for (let i = 0; i < 5; i++) {

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

            for (let i = 0; i < 5; i++) {
                nameLand = `nameLand-${random()}`
                location = `location-${random()}`
                soiltype = `soiltype-${random()}`
                scheme = [[], [], [], [], []]

                for (let j = 0; j < scheme.length; j++)
                    for (let i = 0; i < veggies.length; i++) {
                        scheme[j].push(veggies[i].id)
                    }

                await createLand(token, nameLand, location, soiltype, scheme)

                land = await Land.findOne({ name: nameLand })
                landId = land.id

                for (let j = 0; j < 5; j++) {
                    await updateLandAddVeggie(landId, veggies[j].id, token)
                }
                land = await Land.findOne({ name: nameLand })

                for (let k = 0; k < land.plantation.length; k++) {
                    plantations.push(land.plantation[k])
                }

                lands.push(land)
            }
        })

        afterEach(async () => {
            await User.deleteMany({})
            await Item.deleteMany({})
            return await Land.deleteMany({})
        })

        it('should return user\'s plantations on correct data', async () => {
            let userPlantations = await retrieveUserPlantations(token)

            expect(userPlantations.length).toBe(25)

            for (let i = 0; i < lands.length; i++) {

                expect(Object.entries(userPlantations[i]).length).toBe(5)
                expect(plantations[i].to).toBe(userPlantations[i].to)
                expect(plantations[i].from).toBe(userPlantations[i].from)
                expect(plantations[i].veggie.toString()).toBe(userPlantations[i].veggie.toString())
            }
        })
    })


    it('should fail on invalid token', async () => {
        try {
            await retrieveUserPlantations(`${token}--wrong`)
        }
        catch (error) {
            expect(error.message).toBe(`invalid signature`)
        }
    })

    it('should fail if user doesn\'t have any lands', async () => {
        try {
            await retrieveUserPlantations(token)
        }
        catch (error) {
            expect(error.message).toBe(`You have no lands yet!`)
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