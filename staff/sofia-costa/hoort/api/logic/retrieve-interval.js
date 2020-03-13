const { validate } = require('utils')
const { models: { Land, User, Item } } = require('data')
const { NotFoundError } = require('errors')
const moment = require('moment')

module.exports = async (userId, month) => {
    validate.string(userId, 'id')
    //validate.string(landId, 'landId')
    validate.string(month, 'month')

    let veggiesEstTime = []

    let estAverageDay

    let user = await User.findById(userId)

    let lands = user.lands

    lands.forEach(async _land => {

        let land = await Land.findById(_land)

        land.plantation.forEach(async plant => {
            let from = plant.from

            let veggie = await Item.findById(plant.veggie.toString())

            let date = veggie.growthDuration.split('-')
            let averageDay = (Number(date[0]) + Number(date[1]))/2

            estAverageDay = moment(from).add(averageDay).format('MM-DD-YYYY')
            console.log(estAverageDay)

            let interval = `${moment(estAverageDay).subtract(3).format('DD/MM/YYYY')}-${moment(estAverageDay).add(3).format('DD/MM/YYYY')}`

            veggiesEstTime.push({ veggie: plant.veggie.toString() , interval })
            console.log(veggiesEstTime)
        })
    })

    return veggiesEstTime
}