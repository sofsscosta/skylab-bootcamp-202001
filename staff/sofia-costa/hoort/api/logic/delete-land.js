const { validate } = require('utils')
const { models: { Land, User } } = require('data')
const { NotAllowedError } = require('errors')

module.exports = (id, landId) => {
    
    validate.string(id, 'id')
    validate.string(landId, 'landId')

    return Land.findById(landId)
        .then(land => {
            if (!land) throw new NotAllowedError(`wrong credentials`)

            return Land.findByIdAndDelete(landId)
        })
        .then(() => User.findByIdAndUpdate(id, { $pull: { lands: landId } }))
        .then(() => { })
}