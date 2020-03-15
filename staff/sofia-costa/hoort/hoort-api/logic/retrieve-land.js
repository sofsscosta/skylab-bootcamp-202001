const { validate } = require('hoort-utils')
const { models: { Land } } = require('hoort-data')
const { NotFoundError } = require('../../hoort-errors')

module.exports = (userId, landId) => {
    validate.string(userId, 'userId')
    validate.string(landId, 'landId')

    return Land.findById(landId)
        .then(land => {
            if (!land) return new NotFoundError(`land with id ${id} does not exist`)

            return { name: land.name, location: land.location, soiltype: land.soiltype, scheme: land.scheme }
        })
}