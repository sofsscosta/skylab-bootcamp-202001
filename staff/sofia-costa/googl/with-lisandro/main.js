var users = []; // ej: user => { name, surname, username, password }

var _search = createSearch('.search', function (query) {
    googl(query, function (results) {
        createResults('.results', results);
    });
});




var login = createLogin('.login', function (username, password) {

    var user = users.filter(function (user) {
        return user.username === username && user.password === password;
    })

    if (user.length === 1) {
        _search.classList.toggle('search--hide');
        login.classList.toggle('login--hide');
    } else alert('you cannot get in :P');
});

function createUser(name, surname, username, password) {
    if (name && surname && username && password) {
        var newUser = {
            name: name,
            surname: surname,
            username: username,
            password: password
        }
        users.push(newUser);
        return newUser;
    }
    alert('You must complete all the fields');

    return false;
}


var register = createRegister('.register', function (name, surname, username, password) {

    var newUser = createUser(name, surname, username, password);
    if (newUser) {
        register.classList.toggle('register--hide');
        login.classList.toggle('login--hide');

    }

});

toggleForm('.link__login', '.register', '.login');
toggleForm('.link__register', '.register', '.login');
toggleForm('.link__logout', '.search', '.login')
