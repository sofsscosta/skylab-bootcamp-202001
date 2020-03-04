const { validate } = require('events-utils')
const { models: { User, Event } } = require('events-data')
// const { Types: { ObjectId } } = require('mongoose')

module.exports = (userId, eventId) => {

    validate.string(userId, 'userId')
    validate.string(eventId, 'eventId')

    return User.findByIdAndUpdate(userId, { $addToSet: { subscribedEvents: eventId } })
        .then(() => Event.findByIdAndUpdate(eventId, { $addToSet: { subscribers: userId } }))
        .then(() => { })

}

    //users.updateOne()
    // debugger

    // return User.findById({ _id: userId })
    //     .then(user => {
    //         debugger
    //         if (!user.subscribedEvents)
    //             user.subscribedEvents = [eventId]

    //         else if (user.subscribedEvents && !user.subscribedEvents.includes(eventId))
    //             user.subscribedEvents.push(eventId)

    //         return user.save()
    //     })
    //     .then(() => Event.findById({ _id: eventId }))
    //     .then(event => {
    //         debugger
    //         if (!event.subscribers)
    //             event.subscribers = [userId]

    //         if (event.subscribers && !event.subscribers.includes(userId))
    //             event.subscribers.push(userId)

    //         return event.save()
    //     })
    //     .then(() => { })
