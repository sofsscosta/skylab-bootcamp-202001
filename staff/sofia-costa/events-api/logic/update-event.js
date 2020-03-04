const { validate } = require('../utils')
const { models: { User, Event } } = require('../data')
const { NotAllowedError, ContentError } = require('../errors')
const { SchemaTypes: { ObjectId } } = require('mongoose')

module.exports = (userId, eventId, updates) => {
    validate.string(userId, 'userId')
    validate.string(eventId, 'eventId')

    const validKeys = ['title', 'description', 'date', 'location']
    let approvedUpdates = {}

    for (key in updates) {
        if (!(validKeys.includes(key))) throw new NotAllowedError(`invalid field ${key}`)

        if (updates[key] !== '') {
            approvedUpdates[key] = updates[key]

        } else {
            throw new ContentError(`field ${key} is empty`)
        }
    }

    return Event.findByIdAndUpdate(eventId, { $set: approvedUpdates })
}