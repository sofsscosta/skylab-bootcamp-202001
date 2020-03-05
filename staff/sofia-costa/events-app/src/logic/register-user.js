const { validate } = require('events-utils')

module.exports = async function (name, surname, email, password) {
    validate.string(name, 'name')
    validate.string(surname, 'surname')
    validate.string(email, 'email')
    validate.string(password, 'password')

    const register = await fetch(`http://localhost:8085/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, surname, email, password })
    })

    const status = await register.status

    if (status === 409 || status === 406 || status === 403) {
        const { error } = await register
        return new Error(error)
    }

    else if (status === 201) return

    //const res = await register.json()


    else return new Error('Unknown error')
}