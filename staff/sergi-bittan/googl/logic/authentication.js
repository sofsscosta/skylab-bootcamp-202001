"use strict";

function authentication(username, password){
    if (typeof username !== "string")throw new TypeError(username + " is not a string");
    if (typeof password !== "string")throw new TypeError(password + " is not a string");

    var user = users.find(function(user){
        return username === user.username
    });
    if(user && user.password === password){
        return true;
    }else{
        throw new Error("wrong credentials")
    }
}