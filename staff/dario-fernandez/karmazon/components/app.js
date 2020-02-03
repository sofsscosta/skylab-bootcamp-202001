class App extends Component{
    constructor({ title }) {
        super(document.createElement('main'))
        const _app =  this.container
        _app.classList.add('app')
        
        _app.innerHTML = `<h1 class="app__title">${title}</h1>`

        const _login = new Login({
            onSubmit(username, password) {
                try {
                    authenticate(username, password)
        
                    _login.container.replaceWith(_search.container)
                } catch(error) {
                    _login.showError(error.message)
                }
            },
            
            onToRegister() {
                _login.container.replaceWith(_register.container)
            }
        })

        _app.append(_login.container)

        const _register = new Register({
            onSubmit(user) {
                try {
                    register(user)
        
                    _register.container.replaceWith(_login.container)
                } catch (error) {
                    _register.showError(error)
                }
            },  
            
            onToLogin() {
                _register.container.replaceWith(_login.container)
            }
        })

        const _search = new Search({
            onSubmit(query) {
                searchVehicles(query, results => {
                    if(results instanceof Error) {
                        _search.showError(results.message)
                    } else if(results.length === 0) {
                        _search.showWarning('No results')
                    } else {
                        const _results = new Results({ results: results, onClick(id){
                            searchDetails(id, response => {
                                details = new Details(response)
                                _results.container.replaceWith(details.container)

                                details.container.querySelector('i').addEventListener('click', function() {
                                    details.container.replaceWith(_results.container)
                                    details = null
                                })
                            })
                            
                        } })
                        if (!_searchResults){
                            _searchResults = _results.container

                            _app.append(_searchResults);
                        } else if(details){
                            details.container.replaceWith(_results.container);

                            _searchResults = _results.container;
                        } else {
                            _searchResults.replaceWith(_results.container);

                            _searchResults = _results.container;
                        }
                        details = false
                    }
                })
            }
        })
        var _searchResults
        var details
    }
}