function toggleVehicle(token, id, callback) {
    if (typeof token !== 'string') throw new TypeError('token ' + token + ' is not a string');
    if (!token.trim()) throw new Error('token is empty');
    if (typeof id !== "string") throw new TypeError(id + " is not a string")
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

    const [, payload,] = token.split(".")

    const conversion = atob(payload)
    const payloadObject = JSON.parse(conversion) //Convertim el payload string de base64 a base normal passant primer pel atob i després convertint-lo a objecte amb el JSON.Parse

    call(`https://skylabcoders.herokuapp.com/api/v2/users/${payloadObject.sub}`, {
        method: "GET",
        headers: { "Content-Type": "application/json", "Authorization": "Bearer " + token },
        // body: JSON.stringify({name, surname, username, password})
    }, response => {

        const content = JSON.parse(response.content)

        if (response instanceof Error) return callback(response)

        if (response.status !== 200) return callback(new Error(content.error))

            let favorites = []

        if (response.status === 200) {
            
            if (content.favs) {
                const { favs } = content
                const existID = favs.findIndex(value => value === id)

                if (existID !== -1) {
                    favs.splice(existID, 1)
                    favorites = favs
                } else {
                    favorites = favs
                    favorites.push(id)
                }
            } else {
                favorites.push(id)
            }
        }
        call(`https://skylabcoders.herokuapp.com/api/v2/users`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json", "Authorization": "Bearer " + token },
            body: JSON.stringify({"favs": favorites})
        }, response => {

            if (response.content) {
                const content = JSON.parse(response.content)

                if (response instanceof Error) return callback(response)

                if (response.status !== 204) callback(new Error(content.error))
            }

            if (response.status === 204) callback()
        })
    })
}