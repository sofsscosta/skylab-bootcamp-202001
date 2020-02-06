function retrieveUser(token, callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')
    if (typeof token !== 'string') throw new TypeError(token + ' is not a string')

    const [header, payload, signature] = token.split('.')
    const payloadObject = JSON.parse(atob(payload))
    const { sub } = payloadObject

    call('https://skylabcoders.herokuapp.com/api/v2/users/' + sub, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token }
    }, (response) => {

        if (response instanceof Error) return callback(response)

        const { name, error } = JSON.parse(response.content)

        if (error) return callback(error)

        callback(name)
    })

}