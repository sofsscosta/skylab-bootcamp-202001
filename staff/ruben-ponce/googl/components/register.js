'use strict'

function registerUser(selector, callback) {
    var register = document.querySelector(selector);

    register.addEventListener('submit', function(event) {
        event.preventDefault();

        var user = {};

        user.name = this.name.value;
        user.surname = this.surname.value;
        user.username = this.username.value;
        user.password = this.password.value;

        users.push(user);

        callback(user);
    }); 
    return register;
}