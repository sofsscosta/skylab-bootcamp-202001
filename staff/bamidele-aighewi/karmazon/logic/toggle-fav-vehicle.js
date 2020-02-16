function toggleFavVehicle(vehicleId, token, callback) {
    if (typeof vehicleId !== 'string') throw new TypeError(`${vehicleId} is not a string`)
    if (!vehicleId.trim()) throw new Error('vehicleId is empty')
    if (typeof token !== 'string') throw new TypeError(`${token} is not a string`)
    if (!token.trim()) throw new Error('token is empty')

    const tokenParts = token.split('.')
    if (tokenParts.length !== 3) throw new Error('token is invalid')

    /*try {
        const { sub } = JSON.parse(atob(tokenParts[1]))
        if(!sub) throw new Error('Invalid token. "Sub" does not exist in token')
    } catch (error) {
        throw new Error('token is not a valid base64 string')
    }*/

    if (typeof callback !== 'function') throw new TypeError(`${callback} is not a function`)

    const [, payload,] = tokenParts
    const payloadObject = JSON.parse(atob(payload))


    call(`https://skylabcoders.herokuapp.com/api/v2/users/${payloadObject.sub}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    }, response => {
        const content = JSON.parse(response.content)
        if (response.status !== 200) {
            callback(new Error(content.error))
        } else {
            const { favs } = content
            let favourite = []

            if (favs) {
                const existIndex = favs.findIndex(item => item === vehicleId)
                if (existIndex !== -1) {
                    favs.splice(existIndex, 1)
                    favourite = favs
                }else{
                    favourite = favs
                    favourite.push(vehicleId)
                }
            } else {
                favourite.push(vehicleId)
            }

            call(`https://skylabcoders.herokuapp.com/api/v2/users`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({"favs": favourite})
            }, response => {

                if (response.content) {
                    const content = JSON.parse(response.content)
                    if (response.status !== 204) callback(new Error(content.error))
                    else callback()
                } else {
                    callback()
                }
            })
        }
    })
}