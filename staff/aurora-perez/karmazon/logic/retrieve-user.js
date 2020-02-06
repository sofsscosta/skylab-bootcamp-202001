function retrieveUser(token, callback) {
    if (typeof token !== 'string') throw new TypeError('token '+ token + ' is not a string')
    if (typeof callback !== 'function') throw new TypeError('callback '+ callback + ' is not a function')

    const [header, payload, signature] = token.split('.')
    const payloadObject = JSON.parse(atob(payload))
    const {sub, iat, exp} = payloadObject

    call('https://skylabcoders.herokuapp.com/api/v2/users/'+ sub, { 
        method: 'GET',
        headers: {'Content-Type': 'application/json', 'Authorization' : 'Bearer '+token}
        }, (response)=>{
            
            if (response instanceof Error) return callback(response)


            const {name, surname, username, error} = JSON.parse(response.content) //TODO
            
            if(error) return callback (new Error (error))

            const user = {name :name, surname: surname, username: username} //todo

            callback (user)
        })
    
}