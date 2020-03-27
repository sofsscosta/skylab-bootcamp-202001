const API_URL = process.env.REACT_APP_API_URL
// const { AsyncStorage } = require('react-native')
const { validate } = require('../hoort-utils')
const fetch = require('node-fetch')

export default function (email, password) {
    validate.string(email, 'email')
    validate.email(email)
    validate.string(password, 'password')

    return (async () => {

        const auth = await fetch(`http://localhost:8085/users/auth`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        })

        const res = await auth.json()

        const { error, token } = res

        if (error)
            throw new Error(error)

        else {
            // await AsyncStorage.setItem('token', token)
            return token
        }
    })()
}