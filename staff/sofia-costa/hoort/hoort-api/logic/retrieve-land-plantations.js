const { validate } = require('hoort-utils')
const { models: { Land } } = require('hoort-data')
const { NotFoundError } = require('../../hoort-errors')
const moment = require('moment')

module.exports = async (userId, landId) => {
    validate.string(userId, 'userId')
    validate.string(landId, 'landId')

    let land = await Land.findById(landId).lean()

    if (!land.plantation) throw new Error('This land isn\'t planted yet!')

    land.plantation.forEach(plantation => {
        delete plantation._id
        plantation.to = moment(plantation.to).format('YYYY-MM-DD')
        plantation.from = moment(plantation.from).format('YYYY-MM-DD')
    })

    console.log(land.plantation)

    return land.plantation
}