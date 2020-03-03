const { validate } = require('../utils')
const { models: { User, Event } } = require('../data')
const { SchemaTypes: { ObjectId } } = require('mongoose')

module.exports = (publisher, title, description, location, date) => {

    validate.string(publisher, 'publisher')
    validate.string(title, 'title')
    validate.string(description, 'description')
    validate.string(location, 'location')
    validate.type(date, 'date', Date)

    let event = new Event({ publisher, title, description, location, date, created: new Date })

    return event.save()
        .then(() => {
            event = Event.findOne({ publisher, title, description, location, date })
        })
        .then(() => User.findOne({ _id: publisher }))
        .then(user => {
            if (user.publishedEvents && !user.publishedEvents.includes(event._id) || !user.publishedEvents)
                return User.updateOne({ _id: publisher }, { $push: { publishedEvents: event.id } })
        })
        .then(() => { })

}