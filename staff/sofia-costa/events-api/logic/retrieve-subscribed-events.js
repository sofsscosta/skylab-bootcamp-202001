const { validate } = require('events-utils')
const { models: { User, Event } } = require('events-data')

module.exports = (userId) => {

    validate.string(userId, 'userId')

    //users.updateOne()

    return User.findById({_id: userId})
    .then(user => {
        let id = user._id.toString()
        user.id = id
        delete user._id
        return user.subscribedEvents
    })
}