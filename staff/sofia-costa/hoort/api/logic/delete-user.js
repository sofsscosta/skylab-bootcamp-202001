const { validate } = require('utils')
const { models: { User } } = require('data')
const { NotAllowedError } = require('errors')
const bcrypt = require('bcryptjs')

module.exports = (id, password) => {
    
    validate.string(id, 'id')
    validate.string(password, 'password')

    return User.findById(id)
        .then(user => {
            if (!user) throw new NotAllowedError(`wrong credentials`)

            return bcrypt.compare(password, user.password)
                .then(validPassword => {

                    if (!validPassword) throw new NotAllowedError(`wrong credentials`)

                    user.authenticated = new Date

                    return User.findByIdAndDelete(id)
                })
                .then(() => {})
        })
}