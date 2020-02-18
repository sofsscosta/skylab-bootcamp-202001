const IT = '🎈🤡'

class App extends Component {
    constructor(props) {
        super(document.createElement('main'))

        const app = this.container
        
        app.classList.add('app')

        app.innerHTML = '<h1 class="app__title">' + props.title + '</h1>'

        const _login = new Login({
            onSubmit(username, password) {
                try {
                    authenticate(username, password)

                    _login.container.replaceWith(_search.container)
                } catch (error) {
                    //alert(error.message + ' ' + IT)
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
                    //alert(error.message + ' ' + IT)
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
                        return _search.showError(`${vehicles.message} ${IT}`)

                    if (!vehicles.length)
                        return _search.showWarning(`No results ${IT}`)

                    const __results = new Results({ 
                        results: vehicles, 
                        
                        onItemClick(result) {  
                            retrieveVehicle(result, details => {
                                retrieveStyle(details.style, style => {

                                    const detail = new Detail({details, style})
                                    document.querySelector('ul').replaceWith(detail.container)
    
                                    const goBack = document.querySelector('.go-back')
                                    goBack.addEventListener('click', () => detail.container.replaceWith(_results)) 
                                })
                            })
                        }
                    })

                    if (!_results)
                        app.append(_results = __results)

                    else if (document.querySelector('article')) {
                        document.querySelector('article').replaceWith(__results)
                    }
                    else {
                        document.querySelector('ul').replaceWith(__results)
                        _results = __results
                    }
                })
            }
        })
        let _results
    }
}