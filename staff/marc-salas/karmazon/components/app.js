const IT = '🎈🤡'

class App extends Component {
    constructor(props) {
        super(document.createElement('main'))

        const app = this.container

        app.innerHTML = '<h1>' + props.title + '</h1>'

        const _login = new Login({
            onSubmit: function (username, password) {
                try {
                    authenticate(username, password)

                    _login.container.replaceWith(_search.container)
                } catch (error) {
                    //alert(error.message + ' ' + IT)
                    _login.showError(error.message + ' ' + IT)
                }
            },
            onToRegister: function () {
                _login.container.replaceWith(_register.container)
            }
        })

        app.append(_login.container)

        const _register = new Register({
            onSubmit: function (name, surname, username, password) {
                try {
                    register(name, surname, username, password)

                    _register.container.replaceWith(_login.container)
                } catch (error) {
                    //alert(error.message + ' ' + IT)
                    _register.showError(error.message + ' ' + IT)
                }
            },
            onToLogin: function () {
                _register.container.replaceWith(_login.container)
            }
        })

        const _search = new Search({
            title: 'Search',

            onSubmit: function (query) {
                searchVehicles(query, function (vehicles) {
                    if (vehicles instanceof Error)
                        return _search.showError(vehicles.message + ' ' + IT)

                    if (!vehicles.length)
                        return _search.showWarning('No results ' + IT)
                    const __results = new Results({
                        results: vehicles, onClick(id) {
                            retrieveVehicle(id, function (results) {
                                const _details = new Detail({
                                    results: results,
                                    onClick: function () {
                                        _details.container.replaceWith(__results.container)
                                    }
                                })
                                __results.container.replaceWith(_details.container)
                            })

                        }
                    })

                    if (!_results) {
                        app.append(_results = __results.container)
                    } else {
                        _results.replaceWith(__results.container)
                        _results = __results
                        const _detailsNode = document.querySelector('.detail')
                        if (_detailsNode !== null) {
                            _detailsNode.replaceWith(__results.container)
                        }
                    }
                })
            }
        });


        let _results
    }
}