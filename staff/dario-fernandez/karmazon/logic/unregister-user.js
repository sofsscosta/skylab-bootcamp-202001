function unregisterUser(password, token, callback) {
    debugger
    call('https://skylabcoders.herokuapp.com/api/v2/users', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(password)
    }, response => {
        if(response instanceof Error) callback(response)

        if(response.status === 204) callback(response)
    })
}