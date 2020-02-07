function searchVehicles(query, token, callback) {
  if (typeof query !== "string")
    throw new TypeError(query + " is not a string")
  if (typeof callback !== "function")
    throw new TypeError(callback + " is not a function")

  call("https://skylabcoders.herokuapp.com/api/hotwheels/vehicles?q=" + query, undefined,
    (error, response) => {
      if (error) return callback(error)

      if (response.content.length === 0) return callback(response)

      if (response.status === 200) {
        var results = JSON.parse(response.content)

        call(`https://skylabcoders.herokuapp.com/api/v2/users`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`
            }
          },
          (error, response) => {
            if (error) return callback(error)
            const user = JSON.parse(response.content), { error: _error } = user
            if (_error) return callback(new Error(_error))

            const {fav} = user
            
            if (fav) {
              results.forEach(car => {
                fav.forEach(favId => {
                  if (favId === car.id)
                    car.heart = true
                })
              })
            }
            callback(undefined, results)
          }
        )
      }
    }
  )
}