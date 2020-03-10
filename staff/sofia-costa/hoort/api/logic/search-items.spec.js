require('dotenv').config()

const { env: { TEST_MONGODB_URL } } = process
const { searchItems, createItem } = require('.')
const chai = require('chai')
const { mongoose } = require('data')
const { models: { Item } } = require('data')
const expect = chai.expect
const { random } = Math
const { NotFoundError, NotAllowedError } = require('errors')

describe('searchItems', () => {

    before(() => {
        mongoose.connect(TEST_MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    })

    let id, colorId, name, type , growth, growthDuration, soil, temperature, bestPeriod, lightPreference

    beforeEach(() => {
        colorId = `colorId-${random()}`
        name = `name-${random()}`
        type = `type-${random()}`
        subtype = `subtype-${random()}`
        growth = `growth-${random()}@mail.com`
        growthDuration = `growthDuration-${random()}`
        soil = `soil-${random()}`
        temperature = `temperature-${random()}`
        bestPeriod = `bestPeriod-${random()}`
        bestPeriodNum = `bestPeriodNum-${random()}`
        lightPreference = `lightPreference-${random()}`

        return createItem(colorId, name, type, subtype, growth, growthDuration, soil, temperature, bestPeriod, bestPeriodNum, lightPreference)
        .then(() => Item.findOne({ name }))
        .then(item => id = item.id)
    })

    it('should succeed on correct data', () =>
        searchItems(undefined, id)
            .then(item => {
                expect(item.constructor).to.equal(Object)
                expect(item.colorId).to.equal(colorId)
            })
    )

    it('should fail on invalid id', () =>
        expect(() => {
            searchItems(undefined, `${id}--wrong`)
                .then(() => { throw new Error('should not reach this point') })
                .catch((error) => {
                    expect(error).to.eql(NotFoundError, `user with id ${id} does not exist`)
                })
        })
    )

    afterEach(() => {
        Item.deleteOne({ id })
            .then(() => { })
    })

    after(() => mongoose.disconnect())
})