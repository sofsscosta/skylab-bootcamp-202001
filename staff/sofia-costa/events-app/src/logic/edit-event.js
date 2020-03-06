const { validate } = require('events-utils')

export default async function (token, eventId, updates) {

    validate.string(token, 'token')
    validate.string(eventId, 'eventId')
    validate.type(updates, 'updates', Object);

    return (async () => {
        const edit = await fetch(`http://localhost:8085/users`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
            body: JSON.stringify({ event: eventId, updates })
        })

        const status = edit.status

        if (status === 409 || status === 406 || status === 403 || status === 404) {
            const { error } = edit
            throw new Error(error)
        }

        else if (status === 201) return

        else throw new Error('Unknown error')
    })()


}