'use strict';

var login = createLogin('login', function (username, password) {

    // var user = users.filter(function (user) {
    //     return user.username === username && user.password === password;
    // });

    var user = users.find(function (user) { return user.username === username });

    // if (user.length === 1) {
    //     login.classList.toggle('login--hide');
    //     _google.classList.toggle('search--hide');

    if (user && user.password === password) {
        login.classList.toggle('login--hide');
        login.reset();
        _google.classList.toggle('search--hide');

    } else alert('Wrong credentials, you cannot get in :P');
}, function () {
    login.toggle();
    _register.toggle();
});



var _register = createRegister('register', function (name, surname, username, password) {

    try {
        register(name, surname, username, password);

        _register.toggle();
        login.toggle();
    } catch (error) {
        alert(error.message);
    }

    _register.reset()

}, function () {

    _register.toggle();
    login.toggle();
});


var _google = createSearch('search', function (query) {
    googl(query, function (results) {
        createResults('.results', results);
    });
}, function () {
    _google.toggle();
    login.toggle();
});