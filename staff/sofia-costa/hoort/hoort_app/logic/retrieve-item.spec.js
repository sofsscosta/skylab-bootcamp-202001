const TEST_MONGODB_URL = process.env.REACT_APP_TEST_MONGODB_URL
const { retrieveItem, createItem } = require('.')
const { random } = Math
const { mongoose, models: { Item } } = require('../hoort-data')

describe('retrieveItem', () => {

    beforeAll(async () => {
        await mongoose.connect('mongodb://localhost/test-hoort', { useNewUrlParser: true, useUnifiedTopology: true })
        return await Promise.resolve(Item.deleteMany({}))
    })

    let id, colorId, name, type, growth, growthDuration, soil, temperature, bestPeriod, lightPreference, query, item

    beforeEach(async () => {

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

        item = await Item.findOne({ name: name })
        id = item.id
    })

    it('should succeed on valid id', async () => {

        let result = await retrieveItem(id)

        expect(result).toBeDefined()

        expect(result.name).toBe(item.name)
        expect(result.colorId).toBe(item.colorId)
        expect(result.type).toBe(item.type)
        expect(result.growth).toBe(item.growth)
        expect(result.growthDuration).toBe(item.growthDuration)
        expect(result.soil).toBe(item.soil)
        expect(result.temperature).toBe(item.temperature)
        expect(result.bestPeriod).toBe(item.bestPeriod)
        expect(result.lightPreference).toBe(item.lightPreference)
    })

    it('should fail on non-existant id', async () => {

        try {
            await retrieveItem(`wrong-id`)
        } catch (error) {
            expect(error.message).toBe(`There\'s no item corresponding to this id!`)
        }
    })

    afterAll(async () => {
        await Promise.resolve(Item.deleteMany({}))
        return await mongoose.disconnect()
    })
})