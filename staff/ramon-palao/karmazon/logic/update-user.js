function updateUser(token, newUser, callback) {
    debugger
    if (typeof token !== 'string') throw new TypeError('token ' + token + ' is not a string');
    if (!token.trim()) throw new Error('token is empty');
    if (typeof newUser !== 'object') throw new TypeError(newUser + ' is not an object');
    // if (!newUser.trim()) throw new Error('newUser is empty');
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');
    if (newUser.oldPassword && !newUser.password) throw new Error("new password must be completed")
    if (!newUser.oldPassword && newUser.password) throw new Error("old password must be completed")

    for (const key in newUser)
        if(!newUser[key]) delete newUser[key]

    call(`https://skylabcoders.herokuapp.com/api/v2/users`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json", "Authorization":"Bearer " + token},
        body: JSON.stringify(newUser)
    }, response =>{
        
        if(response.content){
            const content = JSON.parse(response.content)
        
            if (response instanceof Error) return callback(response)
    
            if(response.status !== 204) callback(new Error(content.error))
        }

        if (response.status === 204) callback()
    })
}