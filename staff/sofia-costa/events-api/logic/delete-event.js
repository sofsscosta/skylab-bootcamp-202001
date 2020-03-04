const { validate } = require('events-utils')
const { models: { User, Event } } = require('events-data')

module.exports = (id, eventId) => {

    validate.string(id, 'id')
    validate.string(eventId, 'eventId')

    //if (Event.findById({ _id: eventId })) throw new Error('No events that match this id')

    return Event.deleteOne({ _id: eventId })
        .then(() => User.findByIdAndUpdate(id, { $pull: { publishedEvents: eventId } }))
        .then(() => User.updateMany({ subscribedEvents: { $elemMatch: { $regex : eventId } } }, { $pull: { subscribedEvents: eventId } }))
        .then(() => { })


}