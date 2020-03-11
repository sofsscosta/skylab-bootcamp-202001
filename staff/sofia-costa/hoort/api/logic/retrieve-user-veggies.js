const { validate } = require('utils')
const { models: { User, Land } } = require('data')
const { NotFoundError } = require('errors')

module.exports = (userId) => {
    validate.string(userId, 'userId')

    let veggies = []

    return User.findById(userId)
        .then(user => {

            user.lands.forEach(land => {
                return Land.findById(land.toString())
                    .then(land => {
                        land.veggies.map(veggie => {
                            if(!veggies.includes(veggie)) veggies.push(veggie)
                        })
                    })
            })

            return veggies
        })
}