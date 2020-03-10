const { validate } = require('utils')
const { models: { User, Land, Item } } = require('data')
const { NotAllowedError, ContentError } = require('errors')
const { SchemaTypes: { ObjectId } } = require('mongoose')
const bcrypt = require('bcryptjs')

module.exports = (userId, landId, scheme) => {
    validate.string(userId, 'userId')
    validate.string(landId, 'landId')
    validate.scheme(scheme)

    let veggies = []

    return Land.findById(landId)
        .then(land => {
            if (scheme.length === land.scheme.length) {

                for (let element of scheme) {
                    for (let i of element) {
                        if (!veggies.includes(i) && typeof i === 'string') {
                            veggies.push(i)
                        }
                    }
                }

                land.scheme = scheme
                land.veggies = veggies
                return land.save()
                    .then(() => User.findByIdAndUpdate(userId, { $addToSet: { veggies: veggies } }))
                    .then(() => {
                        veggies.map(veggie => {
                            return Item.findById(veggie)
                                .then(veggie => {
                                    veggie.state.push({userId, lands: [{ id: landId }]})
                                    return veggie.save()
                                })
                                .then(() => {})
                        })
                    }) //{ [userId]: { land: landId } }
                    .then(() => {})
            }
            else throw new Error('Scheme differs from original')
        })
}