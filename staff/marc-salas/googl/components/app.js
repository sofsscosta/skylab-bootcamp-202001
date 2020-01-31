'use strict';

var IT = '🎈🤡';

function _app(props) {
    var app = document.createElement('main');

    app.innerHTML = '<h1>' + props.title + '</h1>';

    var _login = createLogin({
        title: 'login',
        onSubmit: function (username, password) {
            //debugger
            var user = users.find(function (user) {
                return username === user.username;
            });
            if (user && user.password === password) {
                _login.replaceWith(_search);
                return 0;
            }

        },
        onToRegister: function () {
            _login.replaceWith(_register);

        }
    });
    var _register = createRegister({
        title: 'register',
        onSubmit: function (name, surName, userName, password) {
            var person = {
                name: name,
                username: userName,
                surname: surName,
                password: password
            }
            if (person.name.length > 0 && person.surname.length > 0 && person.username.length > 0 && person.password.length > 0) {
                users.push(person);
                _register.replaceWith(_login);
            } else {
                alert('Completa todos los campos!')
            };

        },
        onToLogin: function () {
            _register.replaceWith(_login);
        }
    });

    var _search = createSearch({
        title: 'google',
        onSubmit: function (query) {
            googl(query, function (results) {
                if (results instanceof Error) {
                    alert('network Error')
                } else {
                    var _results = createResults({ results: results });

                    if (!_googlResults)
                        app.append(_googlResults = _results);
                    else {
                        _googlResults.replaceWith(_results);

                        _googlResults = _results;
                    }

                }
            });
        }
    });
    var _googlResults;
    app.append(_login);

    return app;
}










