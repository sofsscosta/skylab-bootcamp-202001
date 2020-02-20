const users = require('../data')

const retrieveUser = (user) => {

    const userInfo = users.find(el => {

        if (el.username === user) {
            return {name: el.name, surname: el.surname, username: el.username}
        }
    })
    
    return userInfo
}

module.exports = retrieveUser