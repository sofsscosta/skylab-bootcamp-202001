function toggleFavorites(token, callback) {
  //Error Handling - TO DO

  call(
    "https://skylabcoders.herokuapp.com/api/v2/users",
    {
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
      const vehicles = []

      if(!fav) return callback('there is not favs')

      fav.forEach(id => {
        call("https://skylabcoders.herokuapp.com/api/hotwheels/vehicles/" + id,
          undefined,
          (error, response) => {
            if (error) return callback(error)
            var result = JSON.parse(response.content)
            vehicles.push(result)
          })
      })

      setTimeout(() => {

        vehicles.forEach(car => {
          fav.forEach(favId => {
            if (favId === car.id)
              car.heart = true
          })
        })
        
        callback(undefined, vehicles)
      }, 1000);
      
    }
  )
}
