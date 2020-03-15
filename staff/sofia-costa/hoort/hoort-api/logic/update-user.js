const { validate } = require('utils')
const { models: { User } } = require('data')
const { NotAllowedError, ContentError } = require('../../hoort-errors')
const { SchemaTypes: { ObjectId } } = require('mongoose')
const bcrypt = require('bcryptjs')

module.exports = async (id, updates) => {
    validate.string(id, 'id')

    const VALID_KEYS = ['name', 'username', 'email', 'password']
    let approvedUpdates = {}

    for (key in updates) {
        if (!(VALID_KEYS.includes(key))) throw new NotAllowedError(`invalid field ${key}`)
        debugger
        if (key === 'password')
            updates[key] = await bcrypt.hash(updates[key], 10)

        if (updates[key] !== '') {
            approvedUpdates[key] = updates[key]

        } else {
            throw new ContentError(`field ${key} is empty`)
        }
    }
    return User.findByIdAndUpdate(id, { $set: approvedUpdates })
}