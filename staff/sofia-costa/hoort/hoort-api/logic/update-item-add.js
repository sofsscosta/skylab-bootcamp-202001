const { validate } = require('hoort-utils')
const { models: { Land, Item, User } } = require('hoort-data')
const { NotAllowedError, ContentError } = require('../../hoort-errors')
const moment = require('moment')

module.exports = async (userId, landId, itemId) => {
    validate.string(userId, 'userId')
    validate.string(landId, 'landId')
    validate.string(itemId, 'itemId')

    let veggie = await Item.findById(itemId)

    if (!veggie) throw new ContentError('item does not exist')

    let land = await Land.findOne({ plantation: { $elemMatch: { veggie: itemId } } })

    if (land) return

    else await Land.findByIdAndUpdate(landId, { $addToSet: { plantation: { veggie: itemId } } })

    return
}