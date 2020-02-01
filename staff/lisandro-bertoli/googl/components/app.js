'user strict';

function App(props) {
    var app = document.createElement('main');

    Component.call(this, app);

    app.classList.add('main')


    app.innerHTML = '<h1>' + props.title + '</h1>';

    var _login = new Login({


        onSubmit: function (username, password) {
            try {
                authenticate(username, password);
                _login.container.reset();
                _login.container.replaceWith(_google.container);

            } catch (error) {
                if (error instanceof TypeError) return alert('Something went wrong, try again later');

                _login.showError(error.message);
            }
        },
        onToRegister: function () {
            _login.container.reset();
            _login.container.replaceWith(_register.container);
        }

    });

    app.append(_login.container);

    var _register = new Register({
        onSubmit: function (name, surname, username, password) {
            try {
                register(name, surname, username, password);
                _register.container.reset();
                _register.container.replaceWith(_login.container);

            } catch (error) {
                _register.showError(error.message);
            }
        },

        onToLogin: function () {
            _register.container.reset();
            _register.container.replaceWith(_login.container);
        }
    });

    var _google = new Search({
        title: 'Googl',

        onSubmit: function (query) {
            googl(query, function (results) {
                if (results instanceof Error)
                    //return alert(results.message + ' ' + IT);
                    return _google.showError(results.message);

                if (!results.length)
                    return _google.showWarning('No results');

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
            _google.container.replaceWith(_login.container);

        }

    });

    // var _ecosia = Search({

    //     title: 'Ecosia',

    //     onSubmit: function (query) {

    //         ecosia(query, function (results) {
    //             var _results = Results({ results: results });

    //             if (!_previousResults) {
    //                 _previousResults = _results;
    //                 app.append(_results);
    //             }
    //             else {
    //                 _previousResults.replaceWith(_results);

    //                 _previousResults = _results;
    //             }
    //         });
    //     },

    //     onLogout: function () {
    //         document.querySelector('.results').remove();
    //         _ecosia.replaceWith(_login);
    //     }
    // });

    // var _yahoo = Search({
    //     title: 'Yahoo',

    //     onSubmit: function (query) {
    //         yahoo(query, function (results) {
    //             var _results = Results({ results: results });

    //             if (!_previousResults) {
    //                 _previousResults = _results;
    //                 app.append(_results);
    //             }
    //             else {
    //                 _previousResults.replaceWith(_results);

    //                 _previousResults = _results;
    //             }
    //         });
    //     },

    //     onLogout: function () {
    //         document.querySelector('.results').remove();
    //         _yahoo.replaceWith(_login);
    //     }
    // });

    // var _bing = Search({
    //     title: 'Bing',

    //     onSubmit: function (query) {
    //         bing(query, function (results) {
    //             var _results = Results({ results: results });

    //             if (!_previousResults) {
    //                 _previousResults = _results;
    //                 app.append(_results);
    //             }
    //             else {
    //                 _previousResults.replaceWith(_results);
    //                 _previousResults = _results;
    //             }
    //         });
    //     },

    //     onLogout: function () {
    //         document.querySelector('.results').remove();
    //         _bing.replaceWith(_login);
    //     }
    // });

    var _previousResults;




}

App.prototype = Object.create(Component.prototype);
App.prototype.constructor = App;