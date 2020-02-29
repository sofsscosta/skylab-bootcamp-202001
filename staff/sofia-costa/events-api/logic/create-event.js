const { validate } = require('../utils')
const { database } = require('../data')

const { NotAllowedError } = require('../errors')

module.exports = (title, location, publisher, date) => {

    validate.string(title, 'title')
    validate.string(location, 'location')
    validate.string(publisher, 'publisher')
    validate.string(date, 'date', Date)


}