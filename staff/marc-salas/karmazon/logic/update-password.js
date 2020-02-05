function updatePassword(token, oldpassword, newpassword, callback){
    if(typeof oldpassword !== "string") throw new TypeError (`token ${oldpassword} is not a string`)
    if(typeof newpassword !== "string") throw new TypeError (`token ${newpassword} is not a string`)
    if(typeof callback !== "function") throw new TypeError (`callback ${callback} is not a function`)


    call(`https://skylabcoders.herokuapp.com/api/v2/users`,{
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({password :newpassword , oldpassword: oldpassword}),  
    }, response=>{
        if (response instanceof Error) return callback(response)

        callback()
    })
}