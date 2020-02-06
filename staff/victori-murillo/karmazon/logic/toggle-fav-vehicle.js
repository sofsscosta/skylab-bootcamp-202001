function toggleFavVehicle(token, id, callback) {
  if (typeof token !== 'string') throw new TypeError(token + ' is not a string')
  const [header, payload, signature] = token.split('.')
  if (!header || !payload || !signature) throw new Error('invalid token')
  if (typeof id !== 'string') throw new TypeError(id + ' is not a string')
  if (typeof callback !== 'function') throw new TypeError(callback + ' is not a string')

  call(`https://skylabcoders.herokuapp.com/api/v2/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    }, (error, response) => {
      if (error) return callback(error) // Network Error 
      const user = JSON.parse(response.content), { error: _error } = user
      if (_error) return callback(new Error(_error)) // 

      // Logic
      let {fav} = user
      if (!fav)
        fav = [id]
      else
        fav.includes(id) ? fav = fav.filter(car => id !== car) : fav.push(id)

      call(`https://skylabcoders.herokuapp.com/api/v2/users`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          }, 
          body: JSON.stringify({ fav })
        }, (error, response) => {
          if (error) return callback(error)
          if (response.content) {
            const { error: _error } = JSON.parse(response.content)
            if (_error) return callback(new Error(_error))
          }

          const search = location.search.split("=")[1]
          callback(undefined, search)
        }
      )
    }
  )
}