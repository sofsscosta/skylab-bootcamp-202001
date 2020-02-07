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
    }, (error, response) => {
        if (error) return callback(error)

        if (response.status === 204) {
            return callback('update successful!')
        } 
    })
}