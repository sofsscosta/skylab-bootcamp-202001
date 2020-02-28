const { validate } = require('../utils')
const { users } = require('../data')
const fs = require('fs').promises

const path = require('path')
const moment = require('moment')
const { NotFoundError, NotAllowedError } = require('../errors')

module.exports = id => {
    validate.string(id, 'id')

    const user = users.find(user => user.id === id)

    if (!user) throw new NotFoundError(`user with id ${id} does not exist`)

    if (user.deactivated) throw new NotAllowedError(`user with id ${id} is deactivated`)

    user.retrieved = moment().format('Y-MM-DD HH:mm:ss.SSS')

    // const { name, surname, email } = user
    // const userData = { name, surname, email }
    // JSON.stringify(userData)

    // let userData = [name, surname, email]
    // userData = userData.map(param => JSON.stringify(param))

    return fs.writeFile(path.join(__dirname, '../data/users.json'), JSON.stringify(users, null, 4))
        .then(() => {
            const { name, surname, email } = user

            return { name, surname, email }
        })
}