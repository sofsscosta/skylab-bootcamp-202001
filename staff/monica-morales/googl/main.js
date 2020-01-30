'use strict';

var IT = '🎈🤡';

var _login = createLogin('login', {
    onSubmit: function (username, password) {
        try {
            authenticate(username, password);

            _login.toggle();
            _googl.toggle();
        } catch (error) {
            alert(error.message + ' ' + IT);
        }
    },
    onToRegister: function () {
        _login.toggle();
        _register.toggle();
    }
});

var _register = createRegister('register', {
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

var _googl = createSearch('search', {
    onSubmit: function (query) {
        googl(query, function (results) {
            if (results instanceof Error) return alert(results.message + ' ' + IT);
            
            createResults('.results', results);
        });
    }
});
