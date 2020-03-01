const { validate } = require('../utils')
const { database, database: { ObjectId }, models: { Event } } = require('../data')

module.exports = (publisher, title, description, location, date) => {

    validate.string(publisher, 'publisher')
    validate.string(title, 'title')
    validate.string(description, 'description')
    validate.string(location, 'location')
    validate.type(date, 'date', Date)

    const events = database.collection('events')

    const users = database.collection('users')

    let event

    return events.insertOne(new Event({ publisher: ObjectId(publisher), title, description, location, date }))
        .then(() => {
            event = events.findOne({ publisher: ObjectId(publisher), title, description, location, date })
        })
        .then(() => users.findOne({_id: ObjectId(publisher)}))
        .then(user => {
            if (user.publishedEvents && !user.publishedEvents.includes(event._id) || !user.publishedEvents)
                return users.updateOne({ _id: ObjectId(publisher) }, { $push: { publishedEvents: ObjectId(event._id) } })
        })
        .then(() => { })

}