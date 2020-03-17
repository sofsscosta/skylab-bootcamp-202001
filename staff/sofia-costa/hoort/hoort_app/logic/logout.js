import { AsyncStorage } from 'react-native'

module.exports = async () => {
    try {
        await AsyncStorage.removeItem('token')
    } catch (error) {
        console.log(error.message)
    }
}
