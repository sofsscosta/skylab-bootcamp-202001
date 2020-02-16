'use strict';

function searchVehicles(token, query, callback) {
    if (typeof query !== 'string') throw new TypeError(query + ' is not a string');
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
        if(!content.favs){
            content.favs = []
        }

        if (response instanceof Error) return callback(response)

        if (response.status !== 200) callback(new Error(content.error))

        if (response.status === 200) {

            call('https://skylabcoders.herokuapp.com/api/hotwheels/vehicles?q=' + query, undefined, function (response) {
                if (response instanceof Error) return callback(response);

                if (response.status === 200) {
                    var results = JSON.parse(response.content);

                    callback({vehicles: results, favs: content.favs}); 
                }
            })
        }
    })
}