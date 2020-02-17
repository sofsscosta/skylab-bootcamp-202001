function updateUser(token, data, callback) {
    if (typeof token !== 'string') throw new TypeError(`token ${token} is not a string`)
    if (typeof data !== 'object') throw new TypeError(`data ${data} is not an object`)
    if (typeof callback !== 'function') throw new TypeError(`callback ${callback} is not a function`)

    const [header, payload, signature] = token.split('.')
    if (!header || !payload || !signature) throw new Error('invalid token')

    const { sub } = JSON.parse(atob(payload))

    if (!sub) throw new Error('no user id token')

    const { name, surname, username, password, oldPassword } = data

    const keys = Object.keys(data)

    const VALID_KEYS = ['name', 'surname', 'username', 'password', 'oldPassword']

    for (const key of keys)
        if (!VALID_KEYS.includes(key)) throw new Error(`property ${key} is not allowed`)

    call(`https://skylabcoders.herokuapp.com/api/v2/users`, {
        method: 'PATCH',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }, (error, response) => {
        if (error) return callback(error)

        if (response.content) {
            const { error } = JSON.parse(response.content)
            if (error) return callback(new Error(error))
        }
        callback()
    })
}