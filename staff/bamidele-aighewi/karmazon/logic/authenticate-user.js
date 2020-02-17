function authenticateUser(username, password, callback) {
    if (typeof username !== 'string') throw new TypeError(`${username} is not a string`)
    if (!username.trim()) throw new Error('username is empty')
    if (typeof password !== 'string') throw new TypeError(`${password} is not a string`)
    if (!password.trim()) throw new Error('password is empty')
    if (typeof callback !== 'function') throw new TypeError(`${callback} is not a function`)

    call(`https://skylabcoders.herokuapp.com/api/v2/users/auth`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    }, response => {
        // if (response instanceof Error) return callback(response)

        const content = JSON.parse(response.content)
        // callback(content)

        if (response.status !== 200) callback(new Error(content.error))
        else callback(content.token)
    })
}