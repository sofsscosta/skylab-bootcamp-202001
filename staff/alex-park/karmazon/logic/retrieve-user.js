function retrieveUser(token) {
    if (typeof token !== 'string') throw new TypeError(`token ${token} is not a string`)

    const id = atob(payload)['sub']

    call(`https://skylabcoders.herokuapp.com/api/v2/users/${id}`, undefined, response => {
        if (response instanceof Error) return callback(response)

        if (response.status === 200) callback()
    })
}