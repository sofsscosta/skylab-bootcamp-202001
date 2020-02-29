const { validate } = require('../utils')
const moment = require('moment')
const { ObjectId } = require('mongodb')
const { database } = require('../data')
const { NotFoundError, NotAllowedError } = require('../errors')

/**
 * @params a user when its id is passed
 * @params
 * @params {id} is a string
 * @returns {name, surname, email} of type string. an object with user email, surname and email
 * 
 */

module.exports = id => {
    validate.string(id, 'id')

    const users = database.collection('users')

    return users.findOne({ _id: ObjectId(id) })
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${id} does not exist`)
            if (user.deactivated) throw new NotAllowedError(`user with id ${id} is deactivated`)
            user.retrieved = moment().format('Y-MM-DD HH:mm:ss.SSS')
            const { name, surname, email } = user

            return { name, surname, email }
        })

}