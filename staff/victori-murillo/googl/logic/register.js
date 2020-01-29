function register(user) {
  if(user instanceof Array) throw new TypeError(user.constructor.name + " is not an object")
  if(!(user instanceof Object)) throw new TypeError(user + " is not an object")

  for (var key in user) {
    if(typeof user[key] !== "string") throw new TypeError(user[key] + " is not a string")
  }

  var {username} = user
  if (users.some(function(user){return user.username === username})) throw new Error("User " + username + " already exists");
  
  users.push(user)

  return user
}