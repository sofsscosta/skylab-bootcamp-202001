const TEST_MONGODB_URL = process.env.REACT_APP_TEST_MONGODB_URL
const { retrieveAll, createItem } = require('.')
const { random } = Math
const { mongoose, models: { Item } } = require('../hoort-data')

describe('retrieveAll', () => {

    beforeAll(async () => {
        await mongoose.connect('mongodb://localhost/test-hoort', { useNewUrlParser: true, useUnifiedTopology: true })
        return await Promise.resolve(Item.deleteMany({}))
    })

    let id, colorId, name, type, growth, growthDuration, soil, temperature, bestPeriod, lightPreference, query, index
    let results = []

    beforeEach(async () => {

        type = 'type'
        for (let i = 0; i < 10; i++) {

            colorId = `colorId-${random()}`
            name = `name-${random()}`
            type = `type`
            subtype = `subtype-${random()}`
            growth = `growth-${random()}@mail.com`
            growthDuration = `growthDuration-${random()}`
            soil = `soil-${random()}`
            temperature = `temperature-${random()}`
            bestPeriod = `bestPeriod-${random()}`
            bestPeriodNum = [1, 2, 3]
            lightPreference = `lightPreference-${random()}`

            await createItem(colorId, name, type, subtype, growth, growthDuration, soil, temperature, bestPeriod, bestPeriodNum, lightPreference)

            let result = await Item.findOne({ name: name })

            results.push(result)
        }

        index = Math.floor(Math.random() * 10)
    })

    it('should succeed on showing all items', async () => {

        let _results = await retrieveAll()

        expect(_results.length).toBe(10)

        for (let i = 0; i < 10; i++) {
            expect(_results[i].name).toBe(results[i].name)
            expect(_results[i].id).toBeDefined()
        }
    })

    afterAll(async () => {
        await Promise.resolve(Item.deleteMany({}))
        return await mongoose.disconnect()
    })
})