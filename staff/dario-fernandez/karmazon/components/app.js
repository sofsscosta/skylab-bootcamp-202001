'use strict'

function App(props) {
    var _app =  document.createElement('main')
    _app.classList.add('app')

    Component.call(this, _app)
    
    _app.innerHTML = '<h1 class="app__title">' + props.title + '</h1>'

    var _login = new Login({
        onSubmit: function(username, password) {
            try {
                authenticate(username, password)
    
                _login.container.replaceWith(_search.container)
            } catch(error) {
                _login.showError(error.message)
            }
        },
        
        onToRegister: function() {
            _login.container.replaceWith(_register.container)
        }
    })

    _app.append(_login.container)

    var _register = new Register({
        onSubmit: function(user) {
            try {
                register(user)
    
                _register.container.replaceWith(_login.container)
            } catch (error) {
                _register.showError(error)
            }
        },  
        
        onToLogin: function() {
            _register.container.replaceWith(_login.container)
        }
    })

    var _search = new Search({
        onSubmit: function(query) {
            searchVehicles(query, function(results) {
                if(results instanceof Error) {
                    _search.showError(results.message)
                } else if(results.length === 0) {
                    _search.showWarning('No results')
                } else {
                    var _results = new Results({ results: results, onClick: function(id){
                        searchDetails(id, function(response) {
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

App.prototype = Object.create(Component.prototype)
App.prototype.constructor = App