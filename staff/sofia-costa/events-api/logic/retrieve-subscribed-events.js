const { validate } = require('../utils')
const { database, database: { ObjectId } } = require('../data')

module.exports = (userId) => {

    validate.string(userId, 'userId')

    const users = database.collection('users')

    //users.updateOne()

    return users.findOne({_id: ObjectId(userId)})
    .then(user => user.subscribedEvents)
}