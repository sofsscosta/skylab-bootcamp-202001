const { validate } = require('utils')
const { models: { User, Land } } = require('data')
const { NotFoundError } = require('errors')

module.exports = async (userId) => {
    validate.string(userId, 'userId')

    let veggies = []

    let user = await User.findById(userId)

    for (let _land of user.lands) {
        land = await Land.findById(_land.toString())
        land.veggies.map(veggie => { if(!veggies.includes(veggie)) veggies.push(veggie) })
    }
    
    return veggies
}