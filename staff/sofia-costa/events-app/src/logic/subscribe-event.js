const { validate } = require('events-utils')

export default async function (token, eventId) {
    validate.string(token, 'token')
    validate.string(eventId, 'eventId')

    const create = await fetch(`http://localhost:8085/users/events`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ event: eventId })
    })

    //const res = await create.json()
    const res = await create

    if (res.status === 201)
        return

    if(res.status === 404)
        return res.statusText
}