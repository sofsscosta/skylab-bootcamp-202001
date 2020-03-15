const { validate } = require('utils')
const { models: { Item } } = require('data')
const { NotFoundError } = require('../../hoort-errors')

module.exports = async (query) => {
    validate.string(query, 'query')

    let results = await Item.find({ $or: [{ name: { $regex: query } }, { type: { $regex: query } }, { subtype: { $regex: query } }, { growth: { $regex: query } }, { growthDuration: { $regex: query } }, { soil: { $regex: query } }, { bestPeriod: { $regex: query } }, { temperature: { $regex: query } }, { lightPreference: { $regex: query } }] })

    if (!results.length) throw new NotFoundError('There are no results for your search :(')

    else return results

}