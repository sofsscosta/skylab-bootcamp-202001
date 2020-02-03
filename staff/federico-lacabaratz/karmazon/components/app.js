const IT = '🎈🤡'

class App extends Component {
    constructor(props) {
        super(document.createElement('main'))
    const app = this.container

    app.innerHTML = `<h1>${props.title}</h1>`

    const _login = new Login({
        onSubmit(username, password) {
            try {
                authenticate(username, password)

                _login.container.replaceWith(_search.container)
            } catch (error) {
                _login.showError(error.message + ' ' + IT)
            }
        },
        onToRegister() {
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
        onToLogin() {
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
                
                const _details
                const __results = new Results({ 
                    results: vehicles, 
                    
                    onItemClick(id){
                        retrieveVehicle(id, function(results){
                            _details = new Detail(results)                      
                            __results.replaceWith(_details.container)
                        })

                } })

                if (!_results) {
                    app.append(_results = __results)
                } else {
                    _results.replaceWith(__results)
                    _results = __results
                    const _detailsNode = document.querySelector('.detail')
                    if (_detailsNode !== null) {
                        _detailsNode.replaceWith(__results)
                    }
                }
            })
        }
    })
    let _results
    }
}