const { validate } = require('utils')
const { models: { Land } } = require('data')
const { NotFoundError } = require('../../hoort-errors')
const moment = require('moment')

module.exports = async (userId, landId) => {
    validate.string(userId, 'userId')
    validate.string(landId, 'landId')

    let land = await Land.findById(landId)

    land.plantation.forEach(plantation => {
        delete plantation._id
        plantation.to = moment(plantation.to).format('YYYY-MM-DD')
        plantation.from = moment(plantation.from).format('YYYY-MM-DD')
    })

    return land.plantation
}