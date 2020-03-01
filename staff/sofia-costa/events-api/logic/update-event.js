const { validate } = require('../utils')
const { database, database: { ObjectId } } = require('../data')

module.exports = (userId, eventId, title, description, date, location) => {

    validate.string(userId, 'userId')
    validate.string(eventId, 'eventId')

    title && validate.string(title, 'title')
    description && validate.string(description, 'description')
    date && validate.type(date, 'date', Date)
    location && validate.string(location, 'location')
    
    const events = database.collection('events')

    return events.findOne({ _id: ObjectId(eventId) })
        .then(event => {

            let params = {}

            title !== undefined ? params['_title'] = title : params['_title'] = event.title
            description !== undefined ? params['_description'] = description : params['_description'] = event.description
            date !== undefined ? params['_date'] = date : params['_date'] = event.date
            location !== undefined ? params['_location'] = location : params['_location'] = event.location

            const { _title, _description, _date, _location } = params

            return events.updateOne({ _id: ObjectId(eventId) }, { $set: { title : _title, description: _description, date: _date, location: _location } })
        })
        .then(() => { })
}