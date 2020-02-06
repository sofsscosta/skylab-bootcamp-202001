function retrieveUser(token, callback) {
    if (typeof token !== 'string') throw new TypeError(`token ${token} is not a string`)
    if (typeof callback !== 'function') throw new TypeError(`callback ${callback} is not a function`)

    _token = token.split('.')

    const payload = JSON.parse(atob(_token[1])).sub

    call(`https://skylabcoders.herokuapp.com/api/v2/users/${payload}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: undefined
    }, (error, response) => {

        if (error) return callback(error) //possible 40X of status

        const send =JSON.parse(response.content),{ error: _error} = send 

        if (_error) callback(new Error(_error))
        
        callback(undefined, send)
    })
}

