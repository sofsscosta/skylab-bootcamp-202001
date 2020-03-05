const {validate} = require('events-utils')

export default async function (email, password) {
    validate.string(email, 'email')
    validate.email(email)
    validate.string(password, 'password')

    const auth = await fetch(`http://localhost:8085/users/auth`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    })

    const res = await auth.json()

    const { token, error } = await res

    if (error)
        return new Error(error)

    else return token
}