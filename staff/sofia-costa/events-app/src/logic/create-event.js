export default function (token, title, description, location, date) {
    if (typeof token !== 'string') throw new TypeError(`token ${token} is not a string`)

    const [header, payload, signature] = token.split('.')
    if (!header || !payload || !signature) throw new Error('invalid token')

    const { sub } = JSON.parse(atob(payload))

    if (!sub) throw new Error('no user id in token')

    fetch(`http://localhost:8085/users/${sub}/events`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ title, description, location, date })
    })
        .then(response => {
            return response.text()
        })
        .then(() => { })
        .catch(error => {
            console.log(error)
        })
}