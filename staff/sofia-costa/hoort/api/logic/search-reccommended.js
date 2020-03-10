const { validate } = require('utils')
const { models: { Item } } = require('data')
const { NotFoundError } = require('errors')

module.exports = async () => {

    //let months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']

    let month = new Date().getMonth()

    //let month = months[monthNum]

    let results = await Item.find({ $or: [{ bestPeriodNum: month }] })

    return results
}