const { validate } = require('../utils')
const { database } = require('../data')

const { NotAllowedError } = require('../errors')

module.exports = (email, password) => {
    validate.string(email, 'email')
    validate.email(email)
    validate.string(password, 'password')

    const users = database.collection('users')

    return users.findOne({ email })

        .then(user => {
            if (!user) throw new NotAllowedError(`wrong credentials`)

            user.authenticated = new Date

            return user._id
        })
}