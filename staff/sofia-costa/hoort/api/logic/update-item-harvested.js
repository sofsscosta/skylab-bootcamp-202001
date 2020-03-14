const { validate } = require('utils')
const { models: { Land, Item, User } } = require('data')
const { NotAllowedError, ContentError } = require('errors')
const { SchemaTypes: { ObjectId } } = require('mongoose')
const bcrypt = require('bcryptjs')

module.exports = async (userId, landId, itemId) => {
    validate.string(userId, 'userId')
    validate.string(landId, 'landId')
    validate.string(itemId, 'itemId')

    let land = await Land.findById(landId)

    let plantation = land.plantation.find(plant => plant.veggie.toString() === itemId)

    plantation.to = new Date()
    
    let to = plantation.to
    let from = plantation.from

    plantation = plantation.toObject()
    delete plantation.estTime

    await land.save()

    let item = await Item.findById(itemId)

    let growthDuration = item.growthDuration.split('-')
            
    minDuration = Number(growthDuration[0])
    maxDuration = Number(growthDuration[1])

    userDuration = (from.getDate() + to.getDate())/2

    minDuration = Math.floor((minDuration + userDuration)/2)
    maxDuration = Math.floor((maxDuration + userDuration)/2)

    if (item.growthDurationAll)
        item.growthDurationAll = `${minDuration}-${maxDuration}`
    
    else item.growthDurationAll = item.growthDuration

    await item.save()

    return

    // return Land.findById(landId)//.populate('plantation', 'from')
    //     .then(_land => {
            
    //         plantation = _land.plantation.find(plant => plant.veggie.toString() === itemId)

    //         from = plantation.from

    //         plantation.from = plantation.from

    //         plantation.to = new Date()

    //         to = plantation.to

    //         return _land.save()
    //     })
    //     .then(() => Item.findById(itemId))
    //     .then(item => {

    //         growthDuration = item.growthDuration.split('-')
            
    //         minDuration = Number(growthDuration[0])
    //         maxDuration = Number(growthDuration[1])

    //         userDuration = (from.getDate() + to.getDate())/2

    //         growthDuration = item.growthDuration

    //         minDuration = (minDuration + userDuration)/2
    //         maxDuration = (maxDuration + userDuration)/2

    //         if (item.growthDurationAll)
    //             item.growthDurationAll = `${minDuration}-${maxDuration}`
            
    //         else item.growthDurationAll = growthDuration

    //         console.log(item.growthDurationAll)

    //         item.save()
    //     })


    // let planted, veggie, growthDuration, minDuration, maxDuration, userDuration

    // return Item.findById(itemId)
    //     .then(item => { 
    //         if(!item) throw new ContentError('item does not exist')

    //         growthDuration = item.growthDuration
            
    //         let _growthDuration = growthDuration.split('-')
            
    //         minDuration = Number(_growthDuration[0])
    //         maxDuration = Number(_growthDuration[1])
    //     })
    //     .then(() => Land.findById(landId))
    //     .then(land => {             

    //         veggie = land.veggies.find(veggie => veggie._id.toString() === itemId)

    //         if(!veggie) throw new Error('this veggie is not on this land')

    //         userDuration = land.veggies[land.veggies.indexOf(veggie)].userTime

    //         let today = new Date()
    //         let newdateMin = new Date()
    //         let newdateMax = new Date()
            
    //         newdateMin.setDate(today.getDate() + minDuration)
    //         newdateMax.setDate(today.getDate() + maxDuration)
            
    //         today = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear()
    //         newdateMin = newdateMin.getDate() + "/" + (newdateMin.getMonth() + 1) + "/" + newdateMin.getFullYear()
    //         newdateMax = newdateMax.getDate() + "/" + (newdateMax.getMonth() + 1) + "/" + newdateMax.getFullYear()
                            
    //         land.veggies[land.veggies.indexOf(veggie)].estTime = 0
    //         land.veggies[land.veggies.indexOf(veggie)].userTime = 0
    //         land.veggies[land.veggies.indexOf(veggie)].state = "harvested"
    //         planted = land.veggies[land.veggies.indexOf(veggie)].planted

    //         return land.save()

    //     })
    //     .then(() => Item.findById(itemId))
    //     .then(item => {
            
    //         let today = new Date()
    //         let differenceInTime = today.getTime() - planted.getTime()
    //         let differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24))

    //         item.growthDurationUser = differenceInDays

    //         if (item.growthDurationAll)
    //             item.growthDurationAll = (item.growthDurationAll + userDuration)/2

    //         else item.growthDurationAll = userDuration

    //         item.save()
    //     })
    //     .then(() => {})
}
