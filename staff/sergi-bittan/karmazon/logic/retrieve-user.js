function retrieveUser(token, callback){
    if (typeof token !== 'string') throw new TypeError('token ' + token + ' is not a string')
    if (!token.trim()) throw new Error('token is empty');
    if (typeof callback !== 'function') throw new TypeError('callback ' + callback + ' is not a function')

    const [ ,payload, ] = token.split(".")
    const conversion = atob(payload)
    const payloadObject = JSON.parse(conversion)

    call("https://skylabcoders.herokuapp.com/api/v2/users/" + payloadObject.sub, {
        method: "GET",
        headers: {"Content-Type": "application/json",
                    "Authorization": "Bearer " + token},
    }, response =>{
        const content = JSON.parse(response.content)
        if (response instanceof Error) return callback(response)
        if (response.status !==200) callback(new Error(content.error))
        if (response.status === 200) callback(content)
    })

}

