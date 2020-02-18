'use strict';

function authenticateUser(username, password, callback) {
    if (typeof username !== 'string') throw new TypeError('username ' + username + ' is not a string');
    if (typeof password !== 'string') throw new TypeError('password ' + password + ' is not a string');

    call(`https://skylabcoders.herokuapp.com/api/v2/users/auth`, {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({username, password})
    }, response =>{ 
        const content = JSON.parse(response.content)
        
        if (response instanceof Error) return callback(response)

        if(response.status !== 200) callback(new Error(content.error))

        if (response.status === 200) callback(content.token)
    })

    // var user = users.find(function (user) { return user.username === username; });

    // if (!user || user.password !== password) throw new Error('Wrong credentials');
}