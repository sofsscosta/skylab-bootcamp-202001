const { validate } = require('utils')
const { models: { Land, Item } } = require('data')
const { NotAllowedError, ContentError } = require('errors')
const { SchemaTypes: { ObjectId } } = require('mongoose')
const bcrypt = require('bcryptjs')

module.exports = async (userId, landId, itemId, userTime) => {
    validate.string(userId, 'userId')
    validate.string(landId, 'landId')
    //validate.string(userTime, 'userTime')

    let veggie, estimatedTime

    // return Item.findById(itemId)
    //     .then(item => {
    //         let growthDuration = item.growthDuration.split('-')
    //         let minDuration = growthDuration[0]
    //         let maxDuration = growthDuration[2]
    //     })

    return Land.findById(landId)
        .then(land => {
            
            veggie = land.veggies.find(veggie => veggie._id.toString() === itemId)

            if(!veggie) throw new Error('this veggie is not on this land')

            land.veggies[land.veggies.indexOf(veggie)].estTime

            console.log(veggie)

            land.veggies[land.veggies.indexOf(veggie)].userTime = userTime

            return land.save()
            //return Land.update({ veggies: { _id: itemId } }, { $set: { "items.$.userTime": userTime } })
        })
        .then(() => Item.findById(itemId))
        .then(item => {

            if (!item.userAverageTime) {

                let growthDuration = item.growthDuration.split('-')
                let minDuration = growthDuration[0]
                let maxDuration = growthDuration[2]
    
                let averageTime = (minDuration + maxDuration + userTime)/3
                return Item.findByIdAndUpdate(itemId, { $set: { userAverageTime: averageTime } })
                    .then(() => {})
            }

            else {
                let averageTime = (item.userAverageTime + userTime)/2
                return Item.findByIdAndUpdate(itemId, { $set: { userAverageTime: averageTime } })
                    .then(() => {})
            }
        })

    //return User.findByIdAndUpdate(id, { $set: userAverageTime })
}