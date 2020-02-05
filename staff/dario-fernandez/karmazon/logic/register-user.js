function registerUser(user, callback) {
    
    call('https://skylabcoders.herokuapp.com/api/v2/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    }, response => {
        if(response instanceof Error) return callback(response)

        if(response.status === 201) callback()
    } )


}