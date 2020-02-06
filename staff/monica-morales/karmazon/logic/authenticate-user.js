function authenticateUser(username, password, callback) {
    if (typeof username !== 'string') throw new TypeError(`username  ${username} is not a string`)
    if (typeof password !== 'string') throw new TypeError(`password  ${password} is not a string`)

    call(`https://skylabcoders.herokuapp.com/api/v2/users/auth`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    }, response => {
        
        if (response instanceof Error) return callback(response) //error de status eje. 400

        const { error, token } = JSON.parse(response.content) // en el contenido me puede llegar un error o un token

        if (error) return callback(new Error(error)) //si me llega un error hago una callback para tratar este error

        callback(token) //si no hay error me devuelves el token
    })
}