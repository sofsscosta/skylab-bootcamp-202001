function authenticateUser(credentials, callback) {
    call('https://skylabcoders.herokuapp.com/api/v2/users/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
    }, response => {
        if(response instanceof Error) return callback(respnse)
        console.log(response.status)
        if(response.status === 200) callback() 
    })
}