'use strict';

// LET's spy to see what's going on in stack...
// call = spy(call);
// search = spy(search);
// googl = spy(googl);

// main code here...

var users = []; // ej: user => { name, surname, username, password }

users.push({ name: 'Pepito', surname: 'Grillo', username: 'pepigri', password: '123' });

var IT = '🎈🤡';

var login = createLogin('login', function (username, password) {
    var user = users.find(function (user) { return user.username === username; });

    if (user && user.password === password) {
        login.toggle();
        _googl.toggle();
        _ecosia.toggle();
        _bing.toggle();
        _yahoo.toggle();
    } else alert('Wrong credentials, you cannot get in ' + IT);
}, function () {
    login.toggle();
    register.toggle();
});

var register = createRegister('register', function (name, surname, username, password) {
    var user = users.find(function (user) { return user.username === username; });

    if (user) return alert('Cannot register, user ' + username + ' already exists ' + IT);

    user = { name: name, surname: surname, username: username, password: password };

    users.push(user);

    register.toggle();
    login.toggle();
}, function () {
    register.toggle();
    login.toggle();
});

var _googl = createSearch('search', function (query) {
    googl(query, spy(function (results) {
        createResults('.results', results);
    }));
});

var _ecosia = createSearch('search-2', function (query) {
    ecosia(query, function (results) {
        createResults('.results-2', results);
    });
});

var _bing = createSearch('search-3', function (query) {
    bing(query, function (results) {
        createResults('.results-3', results);
    });
});

var _yahoo = createSearch('search-4', function (query) {
    bing(query, function (results) {
        createResults('.results-4', results);
    });
});
