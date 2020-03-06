const { validate } = require('events-utils')

export default async function (token) {
    validate.string(token, 'token')

    const retrieve = await fetch(`http://localhost:8085/users/events/subscribed`, {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${token}` }
    })

    const res = await retrieve.json()

    const { error } = await res

    if (error) throw new Error(error)

    if(!res) throw new Error('You haven\'t subscribed to any events yet!')

    else return res
}