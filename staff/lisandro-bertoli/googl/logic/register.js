'use strict';
function register(name, surname, username, password) {
    if (typeof name !== 'string') throw new TypeError('name ' + name + ' is not a string');
    if (typeof surname !== 'string') throw new TypeError('surname ' + surname + ' is not a string');
    if (typeof username !== 'string') throw new TypeError('username ' + username + ' is not a string');
    if (typeof password !== 'string') throw new TypeError('password ' + password + ' is not a string');

    var user = users.find(function (user) { return user.username === username; });

    if (user) throw new Error('User ' + username + ' already exists.');

    var user = {
        name: name,
        surname: surname,
        username: username,
        password: password
    }

    users.push(user);
}