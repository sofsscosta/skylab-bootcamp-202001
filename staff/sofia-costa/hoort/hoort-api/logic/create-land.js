const { validate } = require('hoort-utils')
const { models: { Land, User } } = require('hoort-data')
const { NotAllowedError } = require('../../hoort-errors')

module.exports = async (name, userId, location, soiltype, scheme) => {

    validate.string(name, 'name')
    validate.string(userId, 'userId')
    validate.string(location, 'location')
    validate.string(soiltype, 'soiltype')
    if (scheme) validate.scheme(scheme)

    let land = await Land.findOne({ name })

    if (land) throw new NotAllowedError(`You have already created a land with the name ${name}!`)

    // let veggies = []

    // if(scheme) {

    //     for (let j = 0; j<scheme.length; j++)
    //         for (let i = 0; i<scheme[j].length; i++) 
    //             if(typeof scheme[j][i] !== 'boolean' && !(veggies.includes(scheme[j][i]))) veggies.push(scheme[j][i])

    //     veggies = veggies.map(veggie => veggie = {_id: veggie})

    //     _land = new Land({ name, userId, location, soiltype, scheme, created: new Date })
    // }

    //else 
    _land = new Land({ name, userId, location, soiltype, scheme, created: new Date })

    let createdLand = await _land.save()

    await User.findByIdAndUpdate(userId, { $addToSet: { lands: createdLand.id } })

    return

    // return Land.findOne({ name })
    //     .then(land => {


    //         return land.save()
    //     })
    //     .then(() => Land.findOne({ name, userId }))
    //     .then(landId => User.findByIdAndUpdate(userId, { $addToSet: { lands: landId } }))
    //     .then(() => {})
}