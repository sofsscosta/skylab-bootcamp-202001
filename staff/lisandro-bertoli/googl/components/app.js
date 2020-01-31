'user strict';

function App(props) {
    var app = document.createElement('main');
    app.classList.add('main')

    app.innerHTML = '<h1>' + props.title + '</h1>';

    var _login = Login({


        onSubmit: function (username, password) {
            try {
                authenticate(username, password);
                _login.reset();
                _login.replaceWith(_google);
                app.append(_ecosia);

            } catch (error) {
                if (error instanceof TypeError) return alert('Something went wrong, try again later');

                alert('Wrong credentials, you cannot get in :P');
            }
        },
        onToRegister: function () {
            _login.reset();
            _login.replaceWith(_register);
        }

    });


    var _register = Register({
        onSubmit: function (name, surname, username, password) {
            try {
                register(name, surname, username, password);
                _register.reset();
                _register.replaceWith(_login);

            } catch (error) {
                alert(error.message);
            }
        },

        onToLogin: function () {
            _register.reset();
            _register.replaceWith(_login);
        }
    });

    var _google = Search({
        title: 'Googl',

        onSubmit: function (query) {
            googl(query, function (results) {
                var _results = Results({ results: results });

                if (!_previousResults) {
                    _previousResults = _results
                    app.append(_results);

                }
                else {
                    _previousResults.replaceWith(_results);
                    _previousResults = _results;
                }

            });
        },

        onLogout: function () {
            document.querySelector('.results').remove();
            _google.replaceWith(_login);

        }

    });

    var _ecosia = Search({

        title: 'Ecosia',

        onSubmit: function (query) {

            ecosia(query, function (results) {
                var _results = Results({ results: results });

                if (!_previousResults) {
                    _previousResults = _results;
                    app.append(_results);
                }
                else {
                    _previousResults.replaceWith(_results);

                    _previousResults = _results;
                }
            });
        },

        onLogout: function () {
            document.querySelector('.results').remove();
            _ecosia.replaceWith(_login);
        }
    });

    var _yahoo = Search({
        title: 'Yahoo',

        onSubmit: function (query) {
            yahoo(query, function (results) {
                var _results = Results({ results: results });

                if (!_previousResults) {
                    _previousResults = _results;
                    app.append(_results);
                }
                else {
                    _previousResults.replaceWith(_results);

                    _previousResults = _results;
                }
            });
        },

        onLogout: function () {
            document.querySelector('.results').remove();
            _yahoo.replaceWith(_login);
        }
    });

    var _bing = Search({
        title: 'Bing',

        onSubmit: function (query) {
            bing(query, function (results) {
                var _results = Results({ results: results });

                if (!_previousResults) {
                    _previousResults = _results;
                    app.append(_results);
                }
                else {
                    _previousResults.replaceWith(_results);
                    _previousResults = _results;
                }
            });
        },

        onLogout: function () {
            document.querySelector('.results').remove();
            _bing.replaceWith(_login);
        }
    });

    var _previousResults;


    app.append(_login);

    return app;
}
