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

    app.append(_login.container);

    var _register = new Register({
        onSubmit: function (name, surname, username, password) {
            try {
                register(name, surname, username, password);

                _register.container.replaceWith(_login.container);
            } catch (error) {
                //alert(error.message + ' ' + IT);
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

                var _results = new Results({
                    results: vehicles,

                    onToItem: function (productId) {
                        retrieveVehicle(productId, function (vehicle) {
                            if (vehicle instanceof Error)
                                return console.log(vehicle.message + ' ' + IT);

                            var detail = new Detail({
                                product: vehicle,

                                backToResults: function () {
                                    detail.container.replaceWith(_previousResults);
                                }
                            });

                            _previousResults.replaceWith(detail.container);
                        });
                    }
                });

                if (!_previousResults) {
                    _previousResults = _results.container
                    app.append(_previousResults);
                }
                else {
                    _previousResults.replaceWith(_results.container);

                    _previousResults = _results.container;
                }
            });
        }
    });

    var _previousResults;
}




App.prototype = Object.create(Component.prototype);
App.prototype.constructor = App;