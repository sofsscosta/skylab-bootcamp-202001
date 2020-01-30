'use strict';

var IT = '🎈🤡';

function App(props) {
    var app = document.createElement('main');

    app.innerHTML = '<h1>' + props.title + '</h1>';

    var _login = Login({
        onSubmit: function (username, password) {
            try {
                authenticate(username, password);

                _login.replaceWith(_googl);
            } catch (error) {
                alert(error.message + ' ' + IT);
            }
        },
        onToRegister: function () {
            _login.replaceWith(_register);
        }
    });

    var _register = Register({
        onSubmit: function (name, surname, username, password) {
            try {
                register(name, surname, username, password);

                _register.replaceWith(_login);
            } catch (error) {
                alert(error.message + ' ' + IT);
            }
        },
        onToLogin: function () {
            _register.replaceWith(_login);
        }
    });

    app.append(_login);

    var _googl = Search({
        title: 'Googl',

        onSubmit: function (query) {
            googl(query, function (results) {
                if (results instanceof Error) return alert(results.message + ' ' + IT);

                var _results = Results({ results: results });

                if (!_googlResults)
                    app.append(_googlResults = _results);
                else {
                    _googlResults.replaceWith(_results);

                    _googlResults = _results;
                }
            });
        }
    });

    var _googlResults;

    return app;
}