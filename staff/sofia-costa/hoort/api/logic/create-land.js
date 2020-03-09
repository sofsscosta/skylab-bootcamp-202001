const { validate } = require('utils')
const { models: { Land, User } } = require('data')
const { NotAllowedError } = require('errors')
const bcrypt = require('bcryptjs')

module.exports = (name, userId, location, soiltype, scheme) => {

    validate.string(name, 'name')
    //validate.string(userId, 'userId')
    validate.string(location, 'location')
    validate.string(soiltype, 'soiltype')
    //validate.string(scheme, 'scheme')

    return Land.findOne({ name })
        .then(land => {
            if (land) throw new NotAllowedError(`You have already created a land with the name ${name}!`)
            
            land = new Land({ name, userId, location, soiltype, scheme, created: new Date })

            return land.save()
        })
        .then(() => Land.findOne({ name, userId }))
        .then(landId => User.findByIdAndUpdate(userId, { $addToSet: { lands: landId } }))
        .then(() => {})
}