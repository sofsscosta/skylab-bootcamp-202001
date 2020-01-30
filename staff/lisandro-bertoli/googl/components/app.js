'user strict';

function App(props) {
    var app = document.createElement('main');
    app.classList.add('main')

    app.innerHTML = '<h1>' + props.title + '</h1>';

    var _login = Login({
        onSubmit: function (username, password) {
            try {
                authenticate(username, password);

                _login.replaceWith(_google);

            } catch (error) {
                if (error instanceof TypeError) return alert('Something went wrong, try again later');

                alert('Wrong credentials, you cannot get in :P');
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
                alert(error.message);
            }
        },

        onToLogin: function () {
            _register.replaceWith(_login);
        }
    });

    var _google = Search({
        title: 'Googl',

        onSubmit: function (query) {
            googl(query, function (results) {
                var _results = Results({ results: results });

                if (!_googleResults)
                    app.append(_googResults = _results);
                else {
                    _googleResults.replaceWith(_results);
                    _googleResults = _results;
                }

            });
        },

        onLogout: function () {
            _google.replaceWith(_login);
        }
    });


    app.append(_login);

    return app;
}
