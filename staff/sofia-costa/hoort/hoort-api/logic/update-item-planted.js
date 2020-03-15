const { validate } = require('hoort-utils')
const { models: { Land, Item } } = require('hoort-data')
const { NotAllowedError, ContentError } = require('../../hoort-errors')
const moment = require('moment')

module.exports = async (userId, landId, itemId) => {
    validate.string(userId, 'userId')
    validate.string(landId, 'landId')
    validate.string(itemId, 'itemId')

    let veggie = await Item.findById(itemId)

    if (!veggie) throw new ContentError('item does not exist')

    let growthDuration = veggie.growthDuration.split('-')

    minDuration = Number(growthDuration[0])
    maxDuration = Number(growthDuration[1])

    await veggie.save()

    let land = await Land.findById(landId)

    plantation = land.plantation.find(plant => plant.veggie.toString() === itemId)

    plantation.from = new Date()

    plantation.to = ''

    let today = new Date()
    let newdateMin = new Date()
    let newdateMax = new Date()

    newdateMin.setDate(today.getDate() + minDuration)
    newdateMax.setDate(today.getDate() + maxDuration)

    today = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear()
    newdateMin = newdateMin.getDate() + "/" + (newdateMin.getMonth() + 1) + "/" + newdateMin.getFullYear()
    newdateMax = newdateMax.getDate() + "/" + (newdateMax.getMonth() + 1) + "/" + newdateMax.getFullYear()

    plantation.estTime = `${newdateMin}-${newdateMax}`

    await land.save()

    return

    // return Land.findById(landId)//.populate('plantation', 'from')
    //     .then(land => {
    //         debugger
    //         plantation = land.plantation.find(plant => plant.veggie.toString() === itemId)

    //         plantation.from = new Date()

    //         plantation.to = ''

    //         return land.save()
    //     })
    //     .then(() => {})


    // let veggie, growthDuration, minDuration, maxDuration

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

    //         let today = new Date()
    //         let newdateMin = new Date()
    //         let newdateMax = new Date()

    //         newdateMin.setDate(today.getDate() + minDuration)
    //         newdateMax.setDate(today.getDate() + maxDuration)

    //         today = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear()
    //         newdateMin = newdateMin.getDate() + "/" + (newdateMin.getMonth() + 1) + "/" + newdateMin.getFullYear()
    //         newdateMax = newdateMax.getDate() + "/" + (newdateMax.getMonth() + 1) + "/" + newdateMax.getFullYear()

    //         land.veggies[land.veggies.indexOf(veggie)].estTime = `${newdateMin}-${newdateMax}`
    //         land.veggies[land.veggies.indexOf(veggie)].state = "planted"
    //         land.veggies[land.veggies.indexOf(veggie)].planted = new Date()

    //         return land.save()
    //     })
}
