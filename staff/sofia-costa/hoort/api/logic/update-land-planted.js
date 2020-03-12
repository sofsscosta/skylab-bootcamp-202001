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
                            veggies.push({veggie: i})
                        }
                    }
                }

                land.scheme = scheme
                console.log(veggies)

                land.plantation = veggies

                // let allVeggies = []

                // veggies.forEach(veggie => allVeggies.push({_id: veggie}))
                
                // console.log(allVeggies)

                // if (!land.veggies.length) Land.findByIdAndUpdate(landId, { $set: { veggies: allVeggies } }).then(() => {})
    
                // else land.veggies.forEach(veggie => {
                //     if (!veggies.includes(veggie._id.toString())){
                //         Land.findByIdAndUpdate(landId, { $pull: { veggies: {_id: veggie} } }).then(() => {})
                //     }
                //     else {
                //         Land.findByIdAndUpdate(landId, { $addToSet: { veggies: {_id: veggie} } }).then(() => {})
                //     }
                //})

                // veggies.forEach(veggie => {
                //     Land.findByIdAndUpdate(landId, { $addToSet: { veggies: {_id: veggie} } }).then(() => {})
                // })
                
                return land.save()
                    // .then(() => User.findById(userId))

                    // .then(user => {

                    //     user.lands.forEach(land => {

                    //         let notIncluded = []

                    //         return Land.findById(land.toString())

                    //             .then(_land => {


                    //                 for (let element of _land.veggies) {

                    //                     if (!user.veggies.includes(element._id)) {

                    //                         user.veggies.push(element._id)

                    //                     } else notIncluded.push(element._id)
                    //                 }

                    //                 console.log(notIncluded)
                    //                 console.log(user.veggies)

                    //                 notIncluded.forEach(el => { if(!user.veggies.includes(el)) user.veggies.splice(user.veggies.indexOf(el), 1) })

                    //                 return user.save()
                    //             })
                    //             .then(() => {})
                    //     })
                    // })
                    //.then(() => User.findByIdAndUpdate(userId, { $addToSet: { veggies: veggies } }))
                    //.then(() => )
            }
            else throw new Error('Scheme differs from original')

        }).then(() => {})
}

//, { $addToSet: { veggies: veggies } }