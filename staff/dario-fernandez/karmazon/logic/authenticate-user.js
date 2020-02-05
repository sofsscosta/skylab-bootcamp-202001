function authenticateUser(credentials, callback) {
    call('https://skylabcoders.herokuapp.com/api/v2/users/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
    }, response => {
        if(response instanceof Error) return callback(response)
        if(response.status === 200) {
            const { token } = JSON.parse(response.content)

            callback(token)
        } else if(response.status === 401) {
            const { error } = JSON.parse(response.content)

            callback(new Error(error))
        } else {
            callback(new Error('Unknown error'))
        }
    })
}