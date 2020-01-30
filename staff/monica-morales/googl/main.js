'use strict';

var IT = '🎈🤡';

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

var _googl = createSearch('form.googl', {
    onSubmit: function (query) {
        googl(query, function (results) {
            if (results instanceof Error) return alert(results.message + ' ' + IT);
            
            createResults('ul.googl', results);
        });
    }
});
