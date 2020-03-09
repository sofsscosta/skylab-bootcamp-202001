const { validate } = require('utils')
const { models: { Item } } = require('data')
const { NotFoundError } = require('errors')

module.exports = (userId, itemId) => {
    if(userId) validate.string(userId, 'id')
    validate.string(itemId, 'itemId')

    return Item.findById(itemId)
        .then(item => {
            if (!item) return new NotFoundError(`item with id ${id} does not exist`)

            if(userId) { 

                for (keys in item.userAverageTime) {
                    if (key === ObjectId(userId))
                        item.userAverageTime = item.userAverageTime[key]
                }
                        
                for (keys in item.state) {
                    if (key === ObjectId(userId))
                        item.state = item.state[key]
                }

                for (keys in item.planted) {
                    if (key === ObjectId(userId))
                        item.planted = item.planted[key]
                }

                return item
            }

            else return { colorId: item.colorId, name: item.name, type: item.type, subtype: item.subtype, growth: item.growth, growthDuration: item.growthDuration, soil: item.soil, temperature: item.temperature, bestPeriod: item.bestPeriod, lightPreference: item.lightPreference }
        })
}