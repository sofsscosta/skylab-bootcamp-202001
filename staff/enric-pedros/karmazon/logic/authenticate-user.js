
function authenticateUser(username, password, callback) {
    if (typeof username !== 'string') throw new TypeError('username ' + username + ' is not a string');
    if (typeof password !== 'string') throw new TypeError('password ' + password + ' is not a string');
    
    call('https://skylabcoders.herokuapp.com/api/v2/users/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    }, (error,response) => {

        if (error instanceof Error) return callback(error) //possible 40X of status

        const { error: _error, token } = JSON.parse(response.content)

        if (_error) return callback(new Error(_error), undefined)

        callback(undefined, token)
    })
}

