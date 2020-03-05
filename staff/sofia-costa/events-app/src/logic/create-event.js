const { validate } = require('events-utils')

export default async function (token, title, description, location, date) {
    validate.string(token)
    validate.string(title, 'title')
    validate.string(description, 'description')
    validate.string(location, 'location')
    validate.type(date, 'date', Date)

    const [header, payload, signature] = token.split('.')
    if (!header || !payload || !signature) throw new Error('invalid token')

    const { sub } = JSON.parse(atob(payload))

    if (!sub) throw new Error('no user id in token')

    const create = await fetch(`http://localhost:8085/users/${sub}/events`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ title, description, location, date })
    })

    //const res = await create.json()

    if (create.status === 201)
        return

    else {
        console.log(create)
        return new Error(create.statusText)
    }
}