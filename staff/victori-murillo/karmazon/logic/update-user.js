function updateUser(user, token, callback) {

    // if (typeof id !== 'string') throw new TypeError(id + ' is not a string');
    // if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

    call('https://skylabcoders.herokuapp.com/api/v2/users', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(user)
    }, response => {
        if (response instanceof Error) return callback(response)

        if (response.status === 204) return callback('update successful!')
    })
}