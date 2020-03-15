const { validate } = require('hoort-utils')
const { models: { Land, User } } = require('hoort-data')
const { NotAllowedError } = require('../../hoort-errors')
const { SchemaTypes: { ObjectId } } = require('mongoose')

module.exports = (id, landId) => {

    validate.string(id, 'id')
    validate.string(landId, 'landId')

    return Land.findById(landId)
        .then(land => {
            if (!land) throw new NotAllowedError(`wrong credentials`)

            if (land.userId.toString() !== id) throw new NotAllowedError(`wrong credentials`)

            return Land.findByIdAndDelete(landId)
        })
        .then(() => User.findByIdAndUpdate(id, { $pull: { lands: landId } }))
        .then(() => { })
}