const { validate } = require('utils')
const { models: { Item, Land } } = require('data')
const { NotFoundError } = require('../../hoort-errors')

module.exports = async (userId, itemId) => {
    validate.string(userId, 'userId')
    validate.string(itemId, 'itemId')

    let to, from, growthDurationUser

    let item = await Item.findById(itemId)

    if (!item) return new NotFoundError(`item with id ${itemId} does not exist`)

    let growthDuration = item.growthDuration

    let growthDurationAll = item.growthDurationAll

    let lands = await Land.find({ plantation: { $elemMatch: { veggie: itemId } } }).lean()

    lands.forEach(land => {

        let veggie = land.plantation.find(plant => plant.veggie.toString() === itemId)
        if (veggie.to && veggie.from) {
            to = veggie.to
            from = veggie.from
        }

        if (to && from) growthDurationUser = (to.getDate() + from.getDate()) / 2
    })

    return { lands, growthDuration, growthDurationAll, growthDurationUser }
}