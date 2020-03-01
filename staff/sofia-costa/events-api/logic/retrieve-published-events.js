const { validate } = require('../utils')
const { database, database: { ObjectId } } = require('../data')

module.exports = (id) => {

    validate.string(id, 'id')

    const events = database.collection('events')

    return events.find({publisher: ObjectId(id)}).toArray()
        .then(events => {return events})
}