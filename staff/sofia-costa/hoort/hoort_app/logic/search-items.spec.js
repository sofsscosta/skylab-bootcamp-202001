const TEST_MONGODB_URL = process.env.REACT_APP_TEST_MONGODB_URL
const { searchItems, createItem } = require('.')
const { random } = Math
const { mongoose, models: { Item } } = require('../hoort-data')

describe('searchItems', () => {

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
            type = `type-${random()}`
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
        console.log('results.length ', results.length)

        index = Math.floor(Math.random() * 10)
    })

    it.only('should succeed on correct data', async () => {
        query = results[index].name

        console.log(query)

        let _results = await searchItems(query)

        expect(_results.length).toBe(1)
        expect(_results[0].name).toBe(results[index].name)
        // expect(_results.colorId).toBe(results[index].colorId)
        // expect(_results.type).toBe(results[index].type)
        // expect(_results.growth).toBe(results[index].growth)
        // expect(_results.growthDuration).toBe(results[index].growthDuration)
        // expect(_results.soil).toBe(results[index].soil)
        // expect(_results.temperature).toBe(results[index].temperature)
        // expect(_results.bestPeriod).toBe(results[index].bestPeriod)
        // expect(_results.lightPreference).toBe(results[index].lightPreference)

    })

    it('should return no results for no results search', () =>
        //expect(() => {
        searchItems('lalalalalal')
            .then(item => {
                console.log(item)
                throw new Error('should not reach this point')
            })
            .catch((error) => {
                expect(error.message).to.eql(`There are no results for your search :(`)
            })
        //})
    )

    afterAll(async () => {
        await Promise.resolve(Item.deleteMany())
        return await mongoose.disconnect()
    })
})