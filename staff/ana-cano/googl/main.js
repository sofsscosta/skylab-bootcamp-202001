var users = []; // ej: user => { name, surname, username, password }

var search = createSearch('.search', function(query) {
    googl(query, function(results) {

        createResults('.results', results);
    });
});

var login = createLogin('.login', function(username, password) {
    var arrayUser = users.filter(function(user) {
        return user.username === username && user.password === password;

    })
    if (arrayUser.length === 1) {
        search.classList.toggle('search--hidden');
        login.classList.toggle('login--hidden');
    } else {
        alert('you cannot get in :P');
    }
});

function User(nombre, surname, username, password) {
    if (nombre && surname && username && password) {
        this.nombre = nombre;
        this.surname = surname;
        this.username = username;
        this.password = password;
    } else {
        return false;
    }
}

var register = createRegister(".register", function(nombre, surname, username, password) {
    var user = new User(nombre, surname, username, password)
    if (user) {
        users.push(user);
        register.classList.toggle('register--hidden');
        login.classList.toggle('login--hidden');

    } else {
        alert("Please complete the form");
    }
})