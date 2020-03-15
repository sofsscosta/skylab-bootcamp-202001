const { validate } = require('utils')
const { models: { Land } } = require('data')
const { NotAllowedError, ContentError } = require('../../hoort-errors')
const { SchemaTypes: { ObjectId } } = require('mongoose')
const bcrypt = require('bcryptjs')

module.exports = async (landId, operation) => {
    validate.string(landId, 'landId')
    validate.string(operation, 'operation')

    if (operation === '+')
        return Land.findById(landId)
            .then(land => {

                if (land.scheme.length <= 19) {

                    let scheme = land.scheme
                    let newLine = new Array

                    for (let i = 0; i < scheme[0].length; i++) newLine.push(false)

                    let count = scheme.length

                    for (let i = 0; i < count; i++) scheme.push(newLine)

                    count = scheme.length / 2 + 1

                    let count2 = scheme[0].length

                    for (let j = 0; j < count; j++) {
                        for (let k = 0; k < count2; k++)
                            scheme[j].push(false)
                    }

                    land.scheme = scheme

                    return land.save()
                }

                else throw new NotAllowedError('Max limit of divisions')
            })

    else if (operation === '-')
        return Land.findById(landId)
            .then(land => {

                if (land.scheme.length >= 7) {

                    let scheme = land.scheme

                    let count = scheme.length / 2

                    for (let i = 0; i < count; i++) scheme.pop()

                    count = scheme[0].length / 2

                    for (let j = 0; j < scheme.length; j++) {
                        for (let k = 0; k < count; k++)
                            scheme[j].pop()
                    }

                    land.scheme = scheme

                    return land.save()
                }

                else throw new NotAllowedError('Min limit of divisions')
            })
}