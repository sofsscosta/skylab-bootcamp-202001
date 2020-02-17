function updateUser(token, user, callback) {
    if (typeof token !== 'string') throw new TypeError('token ' + token + ' is not a string')
    if (!token.trim()) throw new Error('token is empty');
    if (typeof user !== 'object') throw new TypeError(user + ' is not a object')
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

    for (const key in user) {
        if (!user[key]) delete user[key]
    }



    call("https://skylabcoders.herokuapp.com/api/v2/users", {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        },
        body: JSON.stringify(user)
    }, response => {
        if (response.content) {
            const content = JSON.parse(response.content)
            if (response instanceof Error) return callback(response)
            if (response.status !== 204) callback(new Error(content.error))
        }
        if (response.status === 204) callback()


    })
}