const { validate } = require('utils')
const { models: { Land, Item, User } } = require('data')
const { NotAllowedError, ContentError } = require('errors')
const moment = require('moment')

module.exports = async (userId, landId, itemId) => {
    validate.string(userId, 'userId')
    validate.string(landId, 'landId')
    validate.string(itemId, 'itemId')

    let veggie = await Item.findById(itemId)

    if (!veggie) throw new ContentError('item does not exist')

    await Land.findByIdAndUpdate(landId, { $addToSet: { plantation: { veggie: itemId } } })

    return 
}