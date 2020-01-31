var users = [];

var _login = createLogin('form.login', {
    onSubmit: function (username, password) {
        try {
            authenticate(username, password);
            _login.toggle();
            _googl.toggle();
            _ecosia.toggle();
            _bing.toggle();
            _yahoo.toggle();
        } catch (error) {
            alert(error.message + ' ' + IT);
        }
    }, 
    onToRegister: function () {
        _login.toggle();
        _register.toggle();
    }
});

var _register = createRegister('form.register', {
    onSubmit: function (name, surname, username, password) {
        try {
            register(name, surname, username, password);

            _register.toggle();
            _login.toggle();
        } catch (error) {
            alert(error.message + ' ' + IT);
        }
    }, 
    onToLogin: function () {
        _register.toggle();
        _login.toggle();
    }
});

var home = document.querySelector('h1');

home.addEventListener('click', function () {
    window.location.href = 'index.html'
});


var _googl = createSearch('.search', function (query) {
    googl(query, function (results) {
        createResults('.results', results);
    });
});

var _yahoo = createSearch('.search2', function (query) {
    yahoo(query, function (results) {
        createResults('.results2', results);
    });
});

var _bing = createSearch('.search3', function (query) {
    bing(query, function (results) {
        createResults('.results3', results);
    });
});

var _ecosia = createSearch('.search4', function (query) {
    ecosia(query, function (results) {
        createResults('.results4', results);
    });
});