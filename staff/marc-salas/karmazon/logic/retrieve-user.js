function retrieveUser(token, callback) {
    if (typeof token !== "string") throw new TypeError(`token ${token} is not a string`)
    if (typeof callback !== "function") throw new TypeError(`callback ${callback} is not a function`)
    const _token = token.split(".")
    const id = JSON.parse(atob(_token[1])).sub


    call(`https://skylabcoders.herokuapp.com/api/v2/users/${id}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }, response => {
        if (response instanceof Error) return callback(response)

        const { error, name, surname, username } = JSON.parse(response.content)
        if (error) return callback(new Error(error))

        callback(username)
    })
}


