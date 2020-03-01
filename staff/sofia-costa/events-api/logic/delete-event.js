const { validate } = require('../utils')
const { database, database: { ObjectId } } = require('../data')

module.exports = (id, eventId) => {

    validate.string(id, 'id')
    validate.string(eventId, 'eventId')

    const events = database.collection('events')

    const users = database.collection('users')

    if (!events.find({ _id: ObjectId(eventId) })) throw new Error('No events that match this id')

    return events.deleteOne({ _id: ObjectId(eventId) })
        .then(() => users.updateOne({ _id: ObjectId(id) }, { $pull: { publishedEvents: ObjectId(eventId) } }))
        .then(() => users.updateMany({ subscribedEvents: { $elemMatch: { $regex : eventId } } }, { $pull: { subscribedEvents: ObjectId(eventId) } }))
        .then(() => { })


}