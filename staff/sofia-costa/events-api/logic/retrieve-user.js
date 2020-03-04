const { validate } = require('events-utils')
const { models: { User } } = require('events-data')
const moment = require('moment')
const { NotFoundError, NotAllowedError } = require('events-errors')

/**
 * @params a user when its id is passed
 * @params
 * @params {id} is a string
 * @returns {name, surname, email} of type string. an object with user email, surname and email
 * 
 */

module.exports = id => {
    validate.string(id, 'id')

    return User.findById(id)
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${id} does not exist`)
            if (user.deactivated) throw new NotAllowedError(`user with id ${id} is deactivated`)
            user.retrieved = moment().format('Y-MM-DD HH:mm:ss.SSS')

            return user.save()
        })
        .then(({ name, surname, email }) => ({ name, surname, email }))
}