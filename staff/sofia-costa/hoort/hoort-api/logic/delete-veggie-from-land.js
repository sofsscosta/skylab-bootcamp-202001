const { validate } = require('hoort-utils')
const { models: { Land } } = require('hoort-data')
const { NotAllowedError } = require('../../hoort-errors')
const { SchemaTypes: { ObjectId } } = require('mongoose')

module.exports = async (id, landId, itemId) => {

    validate.string(id, 'id')
    validate.string(landId, 'landId')
    validate.string(itemId, 'itemId')

    let land = await Land.findById(landId)

    let plantedVeggie = land.plantation.find(plant => plant.veggie.toString() === itemId)

    console.log(plantedVeggie)

    land.plantation.splice(land.plantation.indexOf(plantedVeggie), 1)

    await land.save()

    return
}