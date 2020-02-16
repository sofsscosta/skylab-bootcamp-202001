function retrieveUser(token, callback) {
    if (typeof token !== 'string') throw new TypeError('token '+ token + ' is not a string')
    if (typeof callback !== 'function') throw new TypeError('callback '+ callback + ' is not a function')

    const [header, payload, signature] = token.split('.')
    const payloadObject = JSON.parse(atob(payload))
    const {sub, iat, exp} = payloadObject

    call('https://skylabcoders.herokuapp.com/api/v2/users/'+ sub, { 
        method: 'GET',
        headers: {'Content-Type': 'application/json', 'Authorization' : 'Bearer '+token}
        }, (error, response)=>{
            
            if (error) return callback(error)

            const user = JSON.parse(response.content)
            const {error: _error} = user
            
            if(_error) return callback (new Error (_error))

            callback (undefined, user)
        })
    
}