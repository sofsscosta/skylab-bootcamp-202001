const { validate } = require('utils')
const { models: { Item } } = require('data')
const { NotFoundError } = require('../../hoort-errors')

module.exports = async () => {

    //let months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']

    let month = new Date().getMonth()

    //let month = months[monthNum]

    let results = await Item.find({ $or: [{ bestPeriodNum: month }] })

    if (!results.length) throw new Error('There are no veggies in season in our database :(')

    return results
}