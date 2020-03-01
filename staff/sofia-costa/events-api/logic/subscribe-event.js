const { validate } = require('../utils')
const { database, database: { ObjectId }, models: { Event } } = require('../data')

module.exports = (userId, eventId) => {

    validate.string(userId, 'userId')
    validate.string(eventId, 'eventId')

    const events = database.collection('events')

    const users = database.collection('users')

    //users.updateOne()

    return users.findOne({ _id: ObjectId(userId)})
        .then(user => {

            if (user.subscribedEvents && !user.subscribedEvents.includes(eventId) || !user.subscribedEvents)
                return users.updateOne({ _id: ObjectId(userId) }, { $push: { subscribedEvents: ObjectId(eventId) } })

        })
        .then(() => events.findOne({ _id: ObjectId(eventId) }))
        .then(event => {

            if (event.subscribers && !event.subscribers.includes(userId) || !event.subscribers)
                return events.updateOne({ _id: ObjectId(eventId) }, { $push: { subscribers: ObjectId(userId) } })

        })
        .then(() => {})
}