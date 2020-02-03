
const IT = '🎈🤡';

class App extends Component {
    constructor({ title }) {
        super(document.createElement('main'))
        const app = this.container


        app.innerHTML = `<h1>${title}</h1>`

        const _login = new Login({
            onSubmit(username, password) {
                try {
                    authenticate(username, password);
                    _login.container.reset();
                    _login.container.replaceWith(_search.container);
                } catch (error) {
                    //alert(error.message + ' ' + IT);
                    _login.showError(error.message + ' ' + IT);
                }
            },

            onToRegister() { _login.container.replaceWith(_register.container) }
        });

        app.append(_login.container);

        const _register = new Register({
            onSubmit(name, surname, username, password) {
                try {
                    register(name, surname, username, password);
                    _register.container.reset();
                    _register.container.replaceWith(_login.container);
                } catch (error) {
                    //alert(error.message + ' ' + IT);
                    _register.showError(error.message + ' ' + IT);
                }
            },
            onToLogin() { _register.container.replaceWith(_login.container) }
        });

        const _search = new Search({
            title: 'Search',

            onSubmit(query) {
                searchVehicles(query, vehicles => {
                    if (vehicles instanceof Error)
                        return _search.showError(vehicles.message + ' ' + IT);

                    if (!vehicles.length)
                        return _search.showWarning('No results ' + IT);

                    const _results = new Results({
                        results: vehicles,

                        onToItem(productId) {
                            retrieveVehicle(productId, vehicle => {

                                const _details = new Detail({
                                    product: vehicle,

                                    backToResults() {
                                        _details.container.replaceWith(_results.container);
                                        _previousResults = _results.container
                                    }
                                });

                                _results.container.replaceWith(_details.container);
                                _previousResults = _details.container;
                            });
                        }
                    });

                    if (!_previousResults) {
                        _previousResults = _results.container
                        app.append(_previousResults);
                    } else {
                        _previousResults.replaceWith(_results.container);

                        _previousResults = _results.container;
                    }
                });
            },

            onLogout() {
                if (_previousResults) {
                    _search.container.reset();
                    _previousResults = undefined;
                    document.querySelector('.results').remove();
                }
                _search.container.replaceWith(_login.container);


            }
        });

        let _previousResults;
    }
}