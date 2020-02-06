function updateUser( token, oldUsername, newUsername, callback){
    if(typeof oldUsername !== "string") throw new TypeError (`token ${oldUsername} is not a string`)
    if(typeof newUsername !== "string") throw new TypeError (`token ${newUsername} is not a string`)
    if(typeof callback !== "function") throw new TypeError (`callback ${callback} is not a function`)


    call(`https://skylabcoders.herokuapp.com/api/v2/users`,{
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({username: newUsername, oldUsername: oldUsername}),  
    }, response=>{
        if (response instanceof Error) return callback(response)

        callback()
    })
}