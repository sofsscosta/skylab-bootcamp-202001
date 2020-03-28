// import context from './context'
// import registerUser from './register-user'
// import authenticateUser from './authenticate-user'
// import retrieveUser from './retrieve-user'
// import isLoggedIn from './is-logged-in'
// import logout from './logout'
// import searchItems from './search-items'
// import retrieveItem from './retrieve-item'
// import retrieveItemForUser from './retrieve-item-for-user'
// import retrieveUserVeggies from './retrieve-user-veggies'
// import searchSuggested from './search-suggested'
// import retrieveUserLands from './retrieve-user-lands'
// import retrieveLand from './retrieve-land'
// import createLand from './create-land'
// import changeDivisions from './change-divisions'
// import retrieveAll from './retrieve-all'
// import plantInLand from './plant-in-land'
// import updateLandAddVeggie from './update-land-add-veggie'
// import updateLandPlantVeggie from './update-land-plant-veggie'
// import updateLandHarvestVeggie from './update-land-harvest-veggie'
// import deleteVeggieFromLand from './delete-veggie-from-land'
// import deleteLand from './delete-land'
// import retrieveUserPlantations from './retrieve-user-plantations'
// import updateUser from './update-user'
// import createItem from './create-item-for-testing'

// // function __context__() { return context }

// // export default { get __context__() { return context } }

// export {
//     // __context__,
//     registerUser,
//     authenticateUser,
//     retrieveUser,
//     isLoggedIn,
//     logout,
//     searchItems,
//     retrieveItem,
//     retrieveItemForUser,
//     retrieveUserVeggies,
//     searchSuggested,
//     retrieveUserLands,
//     retrieveLand,
//     createLand,
//     changeDivisions,
//     retrieveAll,
//     plantInLand,
//     updateLandAddVeggie,
//     updateLandPlantVeggie,
//     updateLandHarvestVeggie,
//     deleteVeggieFromLand,
//     deleteLand,
//     retrieveUserPlantations,
//     updateUser,
//     createItem
// }

const context = require('./context')

module.exports = {
    get __context__() { return context },
    registerUser: require('./register-user'),
    authenticateUser: require('./authenticate-user'),
    retrieveUser: require('./retrieve-user'),
    isLoggedIn: require('./is-logged-in'),
    logout: require('./logout'),
    searchItems: require('./search-items'),
    retrieveItem: require('./retrieve-item'),
    retrieveItemForUser: require('./retrieve-item-for-user'),
    retrieveUserVeggies: require('./retrieve-user-veggies'),
    searchSuggested: require('./search-suggested'),
    retrieveUserLands: require('./retrieve-user-lands'),
    retrieveLand: require('./retrieve-land'),
    createLand: require('./create-land'),
    changeDivisions: require('./change-divisions'),
    retrieveAll: require('./retrieve-all'),
    plantInLand: require('./plant-in-land'),
    updateLandAddVeggie: require('./update-land-add-veggie'),
    updateLandPlantVeggie: require('./update-land-plant-veggie'),
    updateLandHarvestVeggie: require('./update-land-harvest-veggie'),
    deleteVeggieFromLand: require('./delete-veggie-from-land'),
    deleteLand: require('./delete-land'),
    retrieveUserPlantations: require('./retrieve-user-plantations'),
    updateUser: require('./update-user'),
    createItem: require('./create-item-for-testing')
}