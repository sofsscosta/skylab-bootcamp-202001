"use strict";

function authenticate(username, password) {
  if(username instanceof Array) throw new TypeError(username.constructor.name + " is not a string");
  if(typeof username !== "string") throw new TypeError(username + " is not a string");
  if(password instanceof Array) throw new TypeError(password.constructor.name + " is not a string");
  if(typeof password !== "string") throw new TypeError(password + " is not a string");

  var user = users.find(function(user) {return user.username === username});

  if(!user || user.password !== password) throw new Error('Wrong Credentials!');
}