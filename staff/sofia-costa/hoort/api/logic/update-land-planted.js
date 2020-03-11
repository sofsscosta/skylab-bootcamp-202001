const { validate } = require('utils')
const { models: { User, Land, Item, ItemState } } = require('data')
const { NotAllowedError, ContentError } = require('errors')
const { SchemaTypes: { ObjectId } } = require('mongoose')
const bcrypt = require('bcryptjs')

module.exports = (userId, landId, scheme) => {
    validate.string(userId, 'userId')
    validate.string(landId, 'landId')
    validate.scheme(scheme)

    let veggies = []
    //let item

    return Land.findById(landId)
        .then(land => {
            if (scheme.length === land.scheme.length) {

                for (let element of scheme) {
                    for (let i of element) {
                        if (!veggies.includes(i) && typeof i === 'string') {
                            veggies.push(i)
                        }
                    }
                }

                land.scheme = scheme

                //land.veggies = []
                veggies.forEach(veggie => Land.findByIdAndUpdate(landId, { $addToSet: { veggies: {_id: veggie} } }).then(() => {}))
                
                return land.save()


                //land.veggies = veggies
                //return land.save()
                    .then(() => User.findByIdAndUpdate(userId, { $addToSet: { veggies: veggies } }))
                    // // .then(() => {
                    // //     debugger
                    // //     //Promise.all(

                    // //         veggies.forEach(veggie => {

                    // //             const itemState = new ItemState({ user: userId, lands: [{ land: landId }] })

                    // //             return Item.findByIdAndUpdate(veggie, { $set: { itemState } })
                    // //                 // .then(item => {
                    // //                 //     //item.state.push({ user: userId })
                    // //                 //     //item.state.push()
                    // //                 //     //item.state = []
                                    
                    // //                 //     return item.save()
                    // //                 // })
                    // //                 .then(() => {})
                    // //         })
                    // //     //)
                    // // }) //{ [userId]: { land: landId } }
                    // .then(() => {})
            }
            else throw new Error('Scheme differs from original')
        })
}