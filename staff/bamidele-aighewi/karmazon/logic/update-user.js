function updateUser(newUser, token, callback) {
    if(typeof newUser !== 'object') throw new TypeError(`${newUser} is not an object`)
    if(Object.values(newUser).length === 0) throw new Error(newUser + ' is empty')
    if (typeof token !== 'string') throw new TypeError(`${token} is not a string`)
    if (!token.trim()) throw new Error(token + ' is empty')
    if (typeof callback !== 'function') throw new TypeError(`${callback} is not a function`)

    call(`https://skylabcoders.herokuapp.com/api/v2/users`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(newUser)
    }, response => {
        
        if (response.content){
            const content = JSON.parse(response.content)
            if (response.status !== 204) callback(new Error(content.error))
            else callback()
        }else{
            callback()
        }
    })
}