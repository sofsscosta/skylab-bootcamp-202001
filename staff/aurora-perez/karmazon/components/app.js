var IT = '🎈🤡';

class App extends Component {
    constructor(props) { 
        super (document.createElement('main'))

        const app = this.container

        app.classList.add('app')

        app.innerHTML = `<h1>${props.title}</h1>`

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
                _login.container.replaceWith(_register.container);
            }
        })

        app.append(_login.container);

        var _register = new Register({
            onSubmit: function (name, surname, username, password) {
                try {
                    register(name, surname, username, password)

                    _register.container.replaceWith(_login.container)
                } catch (error) {
                    //alert(error.message + ' ' + IT);
                    _register.showError(error.message + ' ' + IT)
                }
            },
            onToLogin: function () {
                _register.container.replaceWith(_login.container)
            }
        })

        const _search = new Search({ 
            title: 'Search',
            
            onSubmit(query) {
                searchVehicles(query, vehicles => {
                    if (vehicles instanceof Error)
                        return _search.showError(vehicles.message + ' ' + IT)

                    if (!vehicles.length)
                        return _search.showWarning('No results ' + IT)

                    const __results = new Results({ results: vehicles, 
                        onItemClick(id){
                            retrieveVehicle(id, function(detailInfo){
                                var detailedCar = new Details({detailInfo})

                                __results.container.replaceWith(detailedCar.container)

                                detailedCar.container.querySelector('button').addEventListener('click', function (){
                                    detailedCar.container.replaceWith(__results.container)
                                })
                            })
                    }
                    })

                    if (!_results)
                        app.append(_results = __results.container)
                    else {
                        _results.replaceWith(__results.container)

                        _results = __results.container
                    }
                })
            }
        })

        let _results;
    }

}
