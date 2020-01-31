'use strict';

var IT = '🎈🤡🪓💀💩';

function App(props) {
    var app = document.createElement('main');

    props.title = '<span class="google-G">G</span><span class="google-o1">o</span><span class="google-o2">o</span><span class="google-g">g</span><span class="google-l">l</span><span class="google-a"> A</span><span class="google-p1">p</span><span class="google-p2">p</span>'

    app.innerHTML = '<h1 class="google-logo">' + props.title + '</h1>';

    var _login = Login({
        onSubmit: function (username, password) {
            try {
                authenticate(username, password);

                _login.replaceWith(_googl);
                app.append(_ecosia);
                app.append(_bing);
                app.append(_yahoo);
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
                    app.insertBefore(_googlResults = _results, _ecosia);
                else {
                    _googlResults.replaceWith(_results);

                    _googlResults = _results;


                }
            });
        }
    });

    var _googlResults;

    var _ecosia = Search({
        title: 'Ecosia',

        onSubmit: function (query) {
            ecosia(query, function (results) {
                if (results instanceof Error) return alert(results.message + ' ' + IT);

                var _results = Results({ results: results });

                if (!_ecosiaResults)
                    app.insertBefore(_ecosiaResults = _results, _bing);
                else {
                    _ecosiaResults.replaceWith(_results);

                    _ecosiaResults = _results;
                }
            });
        }
    });

    var _ecosiaResults;
    
    var _bing = Search({
        title: 'Bing',

        onSubmit: function (query) {
            bing(query, function (results) {
                if (results instanceof Error) return alert(results.message + ' ' + IT);

                var _results = Results({ results: results });

                if (!_bingResults)
                    app.insertBefore(_bingResults = _results, _yahoo);
                else {
                    _bingResults.replaceWith(_results);

                    _bingResults = _results;
                }
            });
        }
    });

    var _bingResults;
    
    var _yahoo = Search({
        title: 'Yahoo',

        onSubmit: function (query) {
            yahoo(query, function (results) {
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

    var _yahooResults;

    return app;
};