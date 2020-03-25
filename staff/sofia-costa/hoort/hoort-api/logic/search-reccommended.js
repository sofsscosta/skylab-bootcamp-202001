const { validate } = require('hoort-utils')
const { models: { Item } } = require('hoort-data')
const { NotFoundError } = require('../../hoort-errors')

module.exports = async () => {

    let month = new Date().getMonth()

    let results = await Item.find({ $or: [{ bestPeriodNum: month }] })

    if (!results.length) throw new Error('There are no veggies in season in our database :(')

    return results
}