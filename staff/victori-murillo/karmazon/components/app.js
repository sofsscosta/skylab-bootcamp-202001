'use strict';

var IT = '🎈🤡';

function App(props) {
    var app = document.createElement('main');

    Component.call(this, app);

    app.innerHTML = '<h1>' + props.title + '</h1>';

    var _login = new Login({
        onSubmit: function (username, password) {
            try {
                authenticate(username, password);

                _login.container.replaceWith(_search.container);
            } catch (error) {
                //alert(error.message + ' ' + IT);
                _login.showError(error.message + ' ' + IT);
            }
        },
        onToRegister: function () {
            _login.container.replaceWith(_register.container);
        }
    });

    // app.append(_login.container);

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

    var _search = new Search({
        title: 'Search',

        onSubmit: function (query) {
            searchVehicles(query, function (vehicles) {
                if (vehicles instanceof Error)
                    return _search.showError(vehicles.message + ' ' + IT);

                if (!vehicles.length)
                    return _search.showWarning('No results ' + IT);

                var __results = new Results({ results: vehicles, 
                    
                    toggleDetails: function(itemId){

                        retrieveVehicle(itemId, function(detail) {
                            var __details = new Details({detail});
                            __results.container.replaceWith(__details.container);
                            _details = __details.container;
                        })
                    }
                });
                
                if (!_results) {
                    app.append(_results = __results.container);

                } else if (_details) {
                    _details.replaceWith(__results.container);
                    _results = __results.container;

                } else {
                    _results.replaceWith(__results.container);
                    _results = __results.container;
                }

                _details = false;
            });
        }
    });

    app.append(_search.container);

    var _results;
    var _details;
}

App.prototype.extend(Component)