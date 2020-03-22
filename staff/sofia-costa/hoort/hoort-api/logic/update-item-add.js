const { validate } = require('hoort-utils')
const { models: { Land, Item, User } } = require('hoort-data')
const { NotAllowedError, ContentError } = require('../../hoort-errors')

module.exports = async (userId, landId, itemId) => {
    validate.string(userId, 'userId')
    validate.string(landId, 'landId')
    validate.string(itemId, 'itemId')

    let veggie = await Item.findById(itemId)

    if (!veggie) throw new ContentError('item does not exist')

    let land = await Land.findById(landId)

    if (!land) throw new ContentError('land does not exist')

    if (
        land.plantation.find(item =>
            item.veggie.toString() === itemId
        ) !== undefined) return land

    else {
        await Land.findByIdAndUpdate(landId, { $addToSet: { plantation: { veggie: itemId } } })
        // console.log(updatedLand)
        return
    }
}

// module.exports = async (userId, landId, itemId) => {
//     validate.string(userId, 'userId')
//     validate.string(landId, 'landId')
//     validate.string(itemId, 'itemId')
//     let _veggie = await Item.findById(itemId)

//     if (!_veggie) throw new ContentError('item does not exist')
//     debugger
//     let land = await Land.findOne({ id: landId, plantation: { $elemMatch: { veggie: itemId } } })

//     if (land) return land

//     else return await Land.findByIdAndUpdate(landId, { $addToSet: { plantation: { veggie: itemId } } })

//     // return
// }