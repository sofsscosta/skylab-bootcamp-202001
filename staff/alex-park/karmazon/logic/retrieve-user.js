function retrieveUser(token, callback) {
    if (typeof token !== 'string') throw new TypeError(`token ${token} is not a string`)
    if (typeof callback !== 'function') throw new TypeError(`callback ${callback} is not a function`)

    const _token = token.split('.')
    const payload = JSON.parse(atob(_token[1])).sub
    if (!payload) throw new Error('no user id in token')

    call(`https://skylabcoders.herokuapp.com/api/v2/users/${payload}`, {
        method: "GET",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
        body: undefined
    }, response => {
        if (response instanceof Error) return callback(response)

        const send = JSON.parse(response.content)

        //if (error) return callback(new Error(error))

        callback(send)
    })
}