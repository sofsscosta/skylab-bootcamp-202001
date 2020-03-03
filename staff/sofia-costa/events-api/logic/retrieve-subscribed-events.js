const { validate } = require('../utils')
const { models: { User, Event } } = require('../data')

module.exports = (userId) => {

    validate.string(userId, 'userId')

    //users.updateOne()

    return User.findById({_id: userId})
    .then(user => user.subscribedEvents)
}