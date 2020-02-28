const { validate } = require('../utils')
const { users } = require('../data')
const { NotAllowedError } = require('../errors')

const fs = require('fs').promises
const path = require('path')

/**
 * Checks user credentials against the storage
 * 
 * @param {string} email user's unique e-mail
 * @param {string} password user's password
 * 
 * @returns {Promise<string>} user id from storage
 * 
 * @throws {ContentError} if user data does not follow the format and content rules
 * @throws {TypeError} if user data does not have the correct type
 * @throws {NotAllowedError} on wrong credentials
 */
module.exports = (email, password) => {
    validate.string(email, 'email')
    validate.email(email)
    validate.string(password, 'password')

    const user = users.find(user => user.email === email && user.password === password)

    if (!user) throw new NotAllowedError(`wrong credentials`)

    user.authenticated = new Date

    return fs.writeFile(path.join(__dirname, '../data/users.json'), JSON.stringify(users, null, 4))
        .then(() => user.id)
}