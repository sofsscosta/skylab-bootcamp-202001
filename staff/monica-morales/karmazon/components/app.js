
const IT = '🎈🤡'

class App extends Component {
    constructor (props) {
        super(document.createElement('main'))
    
        const app = this.container
   
        app.innerHTML = '<h1>' + props.title + '</h1>'
    
        const _login = new Login({
            
            onSubmit (username, password) {
                try {
                    authenticate(username, password)

                    _login.container.replaceWith(_search.container)
                } catch (error) {
                    _login.showError(error.message + ' ' + IT)
                }
            },
            onToRegister () {
                _login.container.replaceWith(_register.container)
            }
        })

        app.append(_login.container)


        const _register = new Register({
            onSubmit(name, surname, username, password) {
                try {
                    register(name, surname, username, password)

                    _register.container.replaceWith(_login.container)
                } catch (error) {
                    _register.showError(error.message + ' ' + IT)
                }
            },
            onToLogin () {
                _register.container.replaceWith(_login.container)
            }
        })


        const _search = new Search({
            title: 'Search',

            onSubmit(query) {
                searchVehicle(query, (vehicles) => {
                    if (vehicles instanceof Error)
                        return _search.showError(vehicles.message + ' ' + IT)

                    if (!vehicles.length) 
                        return _search.showWarning('No results ' + IT)

                        const __results = new Results({
                            results: vehicles, 

                            onItemClick(id) {
                                retrieveVehicle(id, vehicle => {
                                    retrieveStyle(vehicle.style, style => {
                                        const detail = new Detail({ vehicle, style })

                                        _results.replaceWith(detail.container)

                                        _results = detail.container
                                    })

                                })
                            }
                        })

                    if (!_results)
                        app.append(_results = __results.container)
                    else {
                        _results.replaceWith(__results.container)

                        _results = __results.container

                        const detailCar = document.querySelector('.detail')

                        if (detailCar !== null) {
                            detailCar.replaceWith(__results.container)
                        }
                    }
                });
            }
        });

        let _results;
    }
}
