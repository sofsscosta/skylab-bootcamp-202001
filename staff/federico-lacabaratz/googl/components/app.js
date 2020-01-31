'use strict';

var IT = '🎈🤡🪓💀💩';

function App(props) {
    var app = document.createElement('main');

    Component.call(this, app);

    props.title = '<span class="google-G">G</span><span class="google-o1">o</span><span class="google-o2">o</span><span class="google-g">g</span><span class="google-l">l</span><span class="google-a"> A</span><span class="google-p1">p</span><span class="google-p2">p</span>'

    app.innerHTML = '<h1 class="google-logo">' + props.title + '</h1>';

    var _login = new Login({
        onSubmit: function (username, password) {
            try {
                authenticate(username, password);

                _login.container.replaceWith(_googl.container);
                app.append(_ecosia.container);
                app.append(_bing.container);
                app.append(_yahoo.container);
            } catch (error) {
                _login.showError(error.message + ' ' + IT);
            }
        },
        onToRegister: function () {
            _login.container.replaceWith(_register.container);
        }
    });

    app.append(_login.container);

    var _register = new Register({
        onSubmit: function (name, surname, username, password) {
            try {
                register(name, surname, username, password);

                _register.container.replaceWith(_login.container);
            } catch (error) {
                _register.showError(error.message + ' ' + IT);
            }
        },
        onToLogin: function () {
            _register.container.replaceWith(_login.container);
        }
    });

    var _googl = new Search({
        title: 'Googl',

        onSubmit: function (query) {
            googl(query, function (results) {
                if (results instanceof Error) 
                    return _googl.container.showError(results.message + ' ' + IT);

                if (!results.length)
                    return _googl.container.showWarning('No results ' + IT);

                var _results = Results({ results: results });

                if (!_googlResults)
                    app.insertBefore(_googlResults = _results, _ecosia.container);
                else {
                    _googlResults.replaceWith(_results);

                    _googlResults = _results;


                }
            });
        }
    });

    var _googlResults;

    var _ecosia = new Search({
        title: 'Ecosia',

        onSubmit: function (query) {
            ecosia(query, function (results) {
                if (results instanceof Error)                
                    return _ecosia.showError(results.message + ' ' + IT);
                
                if (!results.length)
                    return _ecosia.showWarning('No results ' + IT);

                var _results = Results({ results: results });

                if (!_ecosiaResults)
                    app.insertBefore(_ecosiaResults = _results, _bing.container);
                else {
                    _ecosiaResults.replaceWith(_results);

                    _ecosiaResults = _results;
                }
            });
        }
    });

    var _ecosiaResults;
    
    var _bing = new Search({
        title: 'Bing',

        onSubmit: function (query) {
            bing(query, function (results) {
                if (results instanceof Error)         
                    return _bing.showError(results.message + ' ' + IT);

                if (!results.length)
                    return _bing.showWarning('No results ' + IT);

                var _results = Results({ results: results });

                if (!_bingResults)
                    app.insertBefore(_bingResults = _results, _yahoo.container);
                else {
                    _bingResults.replaceWith(_results);

                    _bingResults = _results;
                }
            });
        }
    });

    var _bingResults;
    
    var _yahoo = new Search({
        title: 'Yahoo',

        onSubmit: function (query) {
            yahoo(query, function (results) {
                if (results instanceof Error)              
                    return _yahoo.showError(results.message + ' ' + IT);

                if (!results.length)
                    return _yahoo.showWarning('No results ' + IT);

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
};

App.prototype = Object.create(Component.prototype);
App.prototype.constructor = App;