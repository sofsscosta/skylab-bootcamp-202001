function __retrieveUserFavs__(token, callback) {
    const userSub = getSub(token)

    call(`https://skylabcoders.herokuapp.com/api/v2/users/${userSub}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }, (error, response) => {
        if(error){
            callback(error)
        } else if(response.status === 200) {
            const { favs } = JSON.parse(response.content)


            callback(undefined, favs)
        } else {
            callback(new Error('Unknown error'))
        }
    })
}