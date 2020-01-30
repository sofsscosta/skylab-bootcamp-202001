'use strict';

// LET's spy to see what's going on in stack...
// call = spy(call);
// search = spy(search);
// googl = spy(googl);

// main code here...

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

var _ecosia = createSearch('form.ecosia', {
    onSubmit: function (query) {
        ecosia(query, function (results) {
            createResults('ul.ecosia', results);
        });
    }
});

var _bing = createSearch('form.bing', {
    onSubmit: function (query) {
        bing(query, function (results) {
            createResults('ul.bing', results);
        });
    }
});

var _yahoo = createSearch('form.yahoo', {
    onSubmit: function (query) {
        bing(query, function (results) {
            createResults('ul.yahoo', results);
        });
    }
});
