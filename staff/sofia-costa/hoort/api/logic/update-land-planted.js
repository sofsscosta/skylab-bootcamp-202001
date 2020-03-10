const { validate } = require('utils')
const { models: { Land } } = require('data')
const { NotAllowedError, ContentError } = require('errors')
const { SchemaTypes: { ObjectId } } = require('mongoose')
const bcrypt = require('bcryptjs')

module.exports = (id, scheme) => {
    //validate.string(scheme, 'scheme')

    return Land.findById(id)
        .then(land => {
            if (scheme.length === land.scheme.length) {
                debugger
                let veggies = []

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
                    .then(() => {})
            }
            else throw new Error('Scheme differs from original')
        })
}