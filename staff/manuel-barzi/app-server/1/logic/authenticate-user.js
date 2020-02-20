const users = require('../data/users')

module.exports = function(username, password) {
    if (typeof username !== 'string') throw new TypeError('username ' + username + ' is not a string')
    if (typeof password !== 'string') throw new TypeError('password ' + password + ' is not a string')

    const user = users.find(function (user) { return user.username === username })

    if (!user || user.password !== password) throw new Error('Wrong credentials')
}