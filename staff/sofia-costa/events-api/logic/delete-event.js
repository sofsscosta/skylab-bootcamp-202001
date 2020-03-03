// const { validate } = require('../utils')
// const { models: { User, Event } } = require('../data')

// module.exports = (id, eventId) => {

//     validate.string(id, 'id')
//     validate.string(eventId, 'eventId')

//     if (!events.find({ _id: ObjectId(eventId) })) throw new Error('No events that match this id')

//     return events.deleteOne({ _id: ObjectId(eventId) })
//         .then(() => users.updateOne({ _id: ObjectId(id) }, { $pull: { publishedEvents: ObjectId(eventId) } }))
//         .then(() => users.updateMany({ subscribedEvents: { $elemMatch: { $regex : eventId } } }, { $pull: { subscribedEvents: ObjectId(eventId) } }))
//         .then(() => { })


// }