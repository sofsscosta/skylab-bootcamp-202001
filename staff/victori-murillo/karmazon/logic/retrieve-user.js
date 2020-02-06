function retrieveUser(token, id, callback) {
    // if (typeof id !== 'string') throw new TypeError(id + ' is not a string');
    // if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

    call(`https://skylabcoders.herokuapp.com/api/v2/users/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }, response => {
        if (response instanceof Error) return callback(response)
        
        if (response.status === 200) return callback(response)
    })
}