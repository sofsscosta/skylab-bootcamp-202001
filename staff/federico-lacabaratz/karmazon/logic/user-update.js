function userUpdate(token, data ,callback){
    if(typeof oldUsername !== "string") throw new TypeError (`oldusername ${oldUsername} is not a string`)
    if(typeof newUsername !== "string") throw new TypeError (`newusername ${newUsername} is not a string`)
    if(typeof callback !== "function") throw new TypeError (`callback ${callback} is not a function`)

call(`https://skylabcoders.herokuapp.com/api/v2/users`, {
    method: "PATCH",
    headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    },
    