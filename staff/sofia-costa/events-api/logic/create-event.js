const { validate } = require('events-utils')
const { models: { User, Event } } = require('events-data')
const { SchemaTypes: { ObjectId } } = require('mongoose')
//const moment = require('moment')

module.exports = (publisher, title, description, location, date) => {

    validate.string(publisher, 'publisher')
    validate.string(title, 'title')
    validate.string(description, 'description')
    validate.string(location, 'location')
    validate.type(date, 'date', Date)

    let event = new Event({ publisher, title, description, location, date, created: new Date })

    return event.save()
        .then(() => {
            return Event.findOne({ publisher, title, description, location, date })
        })
        .then(event => User.findByIdAndUpdate(publisher, { $addToSet: { publishedEvents: event.id } }))
        .then(() => { })

}