function authenticateUser(username, password, callback) {

    if (typeof username !== 'string') throw new TypeError('username ' + username + ' is not a string');
    if (typeof password !== 'string') throw new TypeError('password ' + password + ' is not a string');
    if (typeof callback !== 'function') throw new TypeError(`${callback} is not a function`);

    call('https://skylabcoders.herokuapp.com/api/v2/users/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    }, response => {
        if (response instanceof Error) return callback(response)

        if (response.status === 200) callback(response)
    })
}