const { validate } = require('hoort-utils')
const { models: { User, Land, Item } } = require('hoort-data')
const { NotFoundError } = require('../../hoort-errors')

module.exports = async (userId) => {
    validate.string(userId, 'userId')

    let veggies = []
    let results = []

    let user = await User.findById(userId)

    let lands = user.lands.toObject()

    for (let _land of lands) {

        let land = await Land.findById(_land.toString())

        land.plantation.map(veggie => { if (!veggies.includes(veggie.veggie)) veggies.push(veggie.veggie) })
    }

    for (let veggie of veggies) {

        let veg = await Item.findById(veggie)

        results.push({ id: veg.id, name: veg.name })
    }

    return results
}