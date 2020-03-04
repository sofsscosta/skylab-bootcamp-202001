export default async function (token) {
    if (typeof token !== 'string') throw new TypeError(`token ${token} is not a string`)

    const [header, payload, signature] = token.split('.')
    if (!header || !payload || !signature) throw new Error('invalid token')

    const { sub } = JSON.parse(atob(payload))

    console.log(sub)

    const retrieve = await fetch(`http://localhost:8085/events/${sub}`, {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${token}` }
    })

    const res = await retrieve.json()

    const results = await res

    return results

        // .then(response => response.text())
        // .then(_results => {
        //     if (_results) {

        //         const results = JSON.parse(_results)
        //         return results
        //     }
        //     else return 'You haven\'t published any events!'
        // })
        // .catch(error => console.log(error))
}