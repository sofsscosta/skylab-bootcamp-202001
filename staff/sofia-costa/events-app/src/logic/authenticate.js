export default function (email, password) {
    if (typeof email !== 'string') throw new TypeError(`email ${email} is not a string`)
    if (typeof password !== 'string') throw new TypeError(`password ${password} is not a string`)

    return fetch(`http://localhost:8085/users/auth`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    })
        // .then(response => {
        //     console.log(response)
        //     const { error: _error, token } = JSON.parse(response.content)

        //     if (_error) throw new Error(_error)

        //     return token
        // })
        // .then(response => {
        //     console.log(response.body)
        //     JSON.parse(response)})
        .then(response => response.text())
        .then(data => {
            const { token } = JSON.parse(data)
            return token
        })
        .catch(error => console.log(error))
}