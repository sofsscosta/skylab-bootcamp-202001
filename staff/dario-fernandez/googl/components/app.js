'use strict'

function App(props) {
    var _app =  document.createElement('main')
    _app.classList.add('app')
    
    _app.innerHTML = '<h1>' + props.title + '</h1>'

    var _login = Login({
        onSubmit: function(username, password) {
            try {
                authenticate(username, password)
    
                _login.replaceWith(_googl)
            } catch {
                alert('Wrong username or password. Please try again or register.')
            }
        },
        
        onToRegister: function() {
            _login.replaceWith(_register)
        }
    })
    _app.append(_login)
    var _register = Register({
        onSubmit: function(user) {
            try {
                register(user)
    
                _register.replaceWith(_login)
            } catch {
                alert('Username already in use. Please a new one or login')
            }
        },  
        
        onToLogin: function() {
            _register.replaceWith(_login)
        }
    })

    var _googl = Search({
        onSubmit: function(query) {
            googl(query, function(results) {
                if(results instanceof Error) {
                    alert('Network error')
                } else{
                    var _results = Results({ results: results })
                    if (!_googlResults){
                    _app.append(_googlResults = _results);
                     } else {
                    _googlResults.replaceWith(_results);

                    _googlResults = _results;
                    }
                }
            })
        }
    })
    var _googlResults
    return _app
}