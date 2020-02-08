function getFavsArticles(token, callback) {
    __retrieveUserFavs__(token, (error, userFavs) => {
        if(error) {
            callback(error)
        } else {
            const favsArray = []

            if(userFavs.length){
                searchFavsArticles(token, userFavs, favsArray, favsData => {
                    callback(favsData)
                })
            }
        }
    })
}