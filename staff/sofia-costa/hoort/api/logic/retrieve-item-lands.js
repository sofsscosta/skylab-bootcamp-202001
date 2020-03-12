const { validate } = require('utils')
const { models: { Item, Land } } = require('data')
const { NotFoundError } = require('errors')

module.exports = async (userId, itemId) => {
    validate.string(userId, 'id')
    validate.string(itemId, 'itemId')

    let item = await Item.findById(itemId)

    if (!item) return new NotFoundError(`item with id ${id} does not exist`)

//aqui estou a tentar encontrar as terras onde aparece o vegetal

debugger
    let lands = await Land.find({ plantation: { $elemMatch: { veggie: itemId } } }).lean()

    return lands
}