function updateUser(token, data, callback) {
    if (typeof token !== 'string') throw new TypeError(`token ${token} is not a string`)

    const [header, payload, signature] = token.split('.')
    if (!header || !payload || !signature) throw new Error('invalid token')

    const { sub } = JSON.parse(atob(payload))

    if (!sub) throw new Error('no user id in token')

    if (typeof data !== 'object') throw new TypeError(`data ${data} is not an object`)

    if (typeof callback !== 'function') throw new TypeError(`callback ${callback} is not a function`)

    const { name, surname, username, password, oldPassword } = data

    if (name !== undefined) {
        if (typeof name !== 'string') throw new TypeError(`name ${name} is not a string`)
        if (!name.trim().length) throw new Error(`name is empty or blank`)
    }

    if (surname !== undefined) {
        if (typeof surname !== 'string') throw new TypeError(`surname ${surname} is not a string`)
        if (!surname.trim().length) throw new Error(`surname is empty or blank`)
    }

    if (username !== undefined) {
        if (typeof username !== 'string') throw new TypeError(`username ${username} is not a string`)
        if (!username.trim().length) throw new Error(`username is empty or blank`)
    }

    if (password !== undefined) {
        if (typeof password !== 'string') throw new TypeError(`password ${password} is not a string`)
        if (!password.trim().length) throw new Error(`password is empty or blank`)
    }

    if (oldPassword !== undefined) {
        if (typeof oldPassword !== 'string') throw new TypeError(`oldPassword ${oldPassword} is not a string`)
        if (!oldPassword.trim().length) throw new Error(`oldPassword is empty or blank`)
    }

    if (password && !oldPassword) throw new Error('oldPassword is not defined')
    if (!password && oldPassword) throw new Error('password is not defined')

    const keys = Object.keys(data)

    const VALID_KEYS = ['name', 'surname', 'username', 'password', 'oldPassword']

    for (const key of keys)
        if (!VALID_KEYS.includes(key)) throw new Error(`property ${key} is not allowed`)

    call(`https://skylabcoders.herokuapp.com/api/v2/users/`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
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