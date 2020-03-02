const { validate } = require('../utils')
const { database: { ObjectId }, models: { Event } } = require('../data')

module.exports = (publisher, title, description, location, date) => {
    validate.string(publisher, 'publisher')
    validate.string(title, 'title')
    validate.string(description, 'description')
    validate.string(location, 'location')
    validate.type(date, 'date', Date)

    const event = new Event({ publisher: ObjectId(publisher), title, description, location, date, created: new Date })

    return event.save()
}