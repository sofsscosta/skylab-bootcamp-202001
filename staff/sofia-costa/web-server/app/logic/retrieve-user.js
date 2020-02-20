const users = require('../data')

const retrieveUser = user => {

    if(typeof user !== 'string') throw new TypeError (`user ${user} is not a string`)

    const _user = users.find(el => {
        if (el.username === user) {return {name: el.name, surname: el.surname, username: el.username} }
    })

    return _user
}

module.exports = retrieveUser