const { validate } = require('hoort-utils')
const { models: { Land } } = require('hoort-data')

module.exports = async (userId, landId, scheme) => {
    validate.string(userId, 'userId')
    validate.string(landId, 'landId')
    validate.scheme(scheme)
    debugger
    let land = await Land.findById(landId)

    if (!land) throw new Error('This land doesn\'t exist')

    if (scheme.length === land.scheme.length) {
        land.scheme = scheme

        await land.save()

        land = land.toObject()

        land.id = land._id.toString()
        delete land._id
        delete land.__v

        return land
    }

    else throw new Error('Scheme divisions differ from original')

}


    // let veggies = []
    // let newVeggies = []
    // let otherNewVeggies = []



    // return Land.findById(landId)
    //     .then(async land => {
    //         if (scheme.length === land.scheme.length) {

                // for (let element of scheme) {
                //     for (let i of element) {
                //         if (!veggies.includes(i) && typeof i === 'string') {
                //             veggies.push(i)
                //         }
                //     }
                // }
                // //console.log(veggies)

                // for (let veggie of veggies) {

                //     if (await Land.find({ plantation: { $elemMatch: { veggie }  } }) === null){

                //         await Land.findByIdAndUpdate(landId, { $addToSet: { plantation: { veggie } } }).then(() => {})
                //     }
                // }

        //         land.scheme = scheme

        //         return land.save()
        //             .then(land => land)
        //     }
        //     else throw new Error('Scheme divisions differ from original')

        // }).then(land => land)

//, { $addToSet: { veggies: veggies } }






                // for (let element of scheme) {
                //     for (let i of element) {
                //         if (!veggies.includes(i) && typeof i === 'string') {
                //             veggies.push(i)
                //         }
                //     }
                // }

                // for (let i of veggies) newVeggies.push({veggie: i})

                //console.log(newVeggies)

        // land.scheme = scheme

                // let plantation = land.plantation.toObject()//.then(plantations => plantations)

                //let veggie = Land.find().

                // debugger
                // veggies.forEach(veggie => {
                //     for (let element of plantation) {
                //         if(veggies.includes(element.veggie.toString())) otherNewVeggies.push(element)
                //         else if (!otherNewVeggies.includes(veggie)) otherNewVeggies.push(veggie)
                //     }
                // })

                // console.log(plantation)

                // veggies.forEach(veggie => {

                //     for(let i = 0; i<plantation.length; i++){

                //         // console.log(plantation[i].veggie.toString())
                //         // console.log(veggie.veggie)
                //         // console.log(plantation[i])
                //         console.log(newVeggies.includes(land.plantation[i]))

                //         if(plantation[i].veggie.toString() === veggie.veggie && !newVeggies.includes(land.plantation[i])) 
                //             newVeggies.push(land.plantation[i])
                //         else newVeggies.push(veggie)
                //     }

                //     console.log(newVeggies)

                // })

                //     let isThere = plantation.find(el => {
                //         console.log(typeof veggie.veggie)
                //         console.log(typeof el.veggie.toString())
                //         console.log(el.veggie.toString() == veggie.veggie)
                //         el.veggie.toString() == veggie.veggie
                //     })
                //         console.log(isThere)
                //     if (isThere) newVeggies.push(land.plantation[land.plantation.indexOf(veggie)])
                //     else newVeggies.push(veggie)
                // })

                //console.log(newVeggies)




                // land.plantation = newVeggies




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

        //return land.save()
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