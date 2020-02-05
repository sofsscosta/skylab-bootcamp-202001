function authenticate(username, password, callback) {
    if (typeof username !== 'string') throw new TypeError(`username ${username} is not a string`)
    if (typeof password !== 'string') throw new TypeError(`password ${password} is not a string`)

    call("https://skylabcoders.herokuapp.com/api/v2/users/auth",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({username, password})
    }, response =>{
        const content = JSON.parse(response.content)
        if (response instanceof Error)  callback(response)
        if (response.status !==201) callback(new Error(content.error))
        if (response.status === 201) callback(content.token)
    })
}

   