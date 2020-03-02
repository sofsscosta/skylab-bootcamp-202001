const { validate } = require('../utils')
const { database } = require('../data')

const { NotAllowedError } = require('../errors')

module.exports = (name, surname, email, password) => {
    validate.string(name, 'name')
    validate.string(surname, 'surname')
    validate.email(email)
    validate.string(password, 'password')

    const users = database.collection('users')

    return users.findOne({ email })
        .then(user => {
            if (user) throw new NotAllowedError(`user with email ${email} already exists`)

            user = { name, surname, email, password, created: new Date }
            
            return users.insertOne(user)
        })
        .then(() => {})
}