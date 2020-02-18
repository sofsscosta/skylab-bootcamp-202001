function deleteUser(password, token, callback) {
    if (typeof password !== 'string') throw new TypeError('password ' + password + ' is not a string');
    if (typeof callback !== 'function') throw new TypeError('callback ' + callback + ' is not a function');

    call(`https://skylabcoders.herokuapp.com/api/v2/users/`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${token}`},
        body: JSON.stringify({ password })
   
    }, response => {
        if (response instanceof Error) return callback(response)
        console.log(response)
        if (response.status === 204) callback()
    })
}