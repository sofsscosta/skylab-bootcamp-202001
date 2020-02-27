require('dotenv').config()
const { validate } = require('../utils')
const { users } = require('../data')
const jwt = require('jsonwebtoken')
const fs = require('fs').promises
const path = require('path')
const moment = require('moment')

const { env: { SECRET } } = process

module.exports = token => {
    validate.string(token, 'string')

    const data = jwt.verify(token, SECRET)

    const { sub } = data

    const user = users.find(user => user.id === sub)

    user.retrieved = moment().format('Y-MM-DD HH:mm:ss.SSS')

    const { name, surname, email } = user
    const userData = { name, surname, email }
    JSON.stringify(userData)
    // let userData = [name, surname, email]
    // userData = userData.map(param => JSON.stringify(param))

    return fs.writeFile(path.join(__dirname, '../data/users.json'), JSON.stringify(users, null, 4))
        .then(() => userData)
}