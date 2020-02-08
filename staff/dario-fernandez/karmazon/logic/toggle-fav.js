function toggleFav(vehicleID, token, callback) {
    __retrieveUserFavs__(token, (error, favs) => {
        if(error) {
            callback(error)
        } else {
            if(favs.some(element => element === vehicleID)) {
                favs.removeValue(vehicleID)
            } else {
                favs.push(vehicleID)
            }

            updateFavs(favs, token, error => {
                if(error) {
                    callback(error)
                } else {
                    callback()
                }
            })
        }
    })
}