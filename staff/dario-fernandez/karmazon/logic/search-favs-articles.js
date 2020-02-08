function searchFavsArticles(token, userFavs, favsData, callback) {
    searchVehicles(userFavs[favsData.length], token, (error, data) => {
        if(error) {
            callback(error)
        } else {
            favsData.push(data[0])

            if(userFavs[favsData.length]){
                searchFavsArticles(token, userFavs, favsData, callback)
            } else {
                callback(favsData)
            }
        }
    })
}