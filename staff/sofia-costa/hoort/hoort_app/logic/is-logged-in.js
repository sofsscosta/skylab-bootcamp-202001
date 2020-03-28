import { AsyncStorage } from 'react-native'

module.exports = async function () {
    let token
    try {
        token = await AsyncStorage.getItem('token')
    } catch (error) {
        console.log(error.message)
    }
    return token
}


// const context = require('./context')

// module.exports = async function () {

//     const token = await this.storage.getItem('token')

//     return !!token

// }.bind(context)