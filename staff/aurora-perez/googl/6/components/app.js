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



    var ecosia = Search({
        title: 'Ecosia',

        onSubmit: function (query) {
            googl(query, function (results) {
                if (results instanceof Error) return alert(results.message + ' ' + IT);

                var _results = Results({ results: results });

                if (!_ecosiaResults)
                    app.append(_ecosiaResults = _results);
                else {
                    _ecosiaResults.replaceWith(_results);

                    _ecosiaResults = _results;
                }
            });
        }
    });

    var _ecosiaResults;
    


    var _bing = Search({
        title: 'Googl',

        onSubmit: function (query) {
            googl(query, function (results) {
                if (results instanceof Error) return alert(results.message + ' ' + IT);

                var _results = Results({ results: results });

                if (!_bingResults)
                    app.append(_bingResults = _results);
                else {
                    _bingResults.replaceWith(_results);

                    _bingResults = _results;
                }
            });
        }
    });

    var _bingResults;


    var _yahoo = Search({
        title: 'Googl',

        onSubmit: function (query) {
            googl(query, function (results) {
                if (results instanceof Error) return alert(results.message + ' ' + IT);

                var _results = Results({ results: results });

                if (!_yahooResults)
                    app.append(_yahooResults = _results);
                else {
                    _yahooResults.replaceWith(_results);

                    _yahooResults = _results;
                }
            });
        }
    });

    var _bingResults;
    
    
    
    

    return app;
}