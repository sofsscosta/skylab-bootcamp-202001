var IT = '🎈🤡';

function Enter() {

    var _enter = document.createElement('form');
    _enter.classList.add('enter')

    _enter.innerHTML = '<button type="submit" class="enter__register enter__button" name="register">Register</button>'
        .concat('<button type="submit" class="enter__login enter__button" name="login">Login</button>')

    Interactive.call(this, _enter)    

    var enterRegister = _enter.querySelector('.enter__register')
    var enterLogin = _enter.querySelector('.enter__login')

    var _register = new Register({
    
        onSubmit: function(name, surname, username, password) {
            try {
                register(name, surname, username, password);
                
                _register.replaceWith(_login.container)
    
            } catch (error) {
                _login.showError(error.message + ' ' + IT);
            }
        },
        
        onToLogin: function() {
            _register.replaceWith(_login.container);

        }
        
    })

    var _login = new Login({

        onSubmit: function(username, password) {
            try{
                authenticate(username, password)
        
                _login.replaceWith(_googl.container);

            } catch (error) {
                _login.showError(error.message + ' ' + IT);
            }    
        }, 
    
        onToRegister: function() {
            _login.replaceWith(_register.conatiner);
        }        
    });

    var _googl = new Search({
        title: 'Googl',

        onSubmit: function (query) {
            googl(query, function (results) {
                if (results instanceof Error) return alert(results.message + ' ' + IT);

                var _results = Results({ results: results });

                if (!_googlResults){
                    var app = document.querySelector('main')
                    app.append(_googlResults = _results);
                }
                else {
                    _googlResults.replaceWith(_results);

                    _googlResults = _results;
                }
            });
        }
    })  

    var _googlResults;


    enterRegister.addEventListener('click', function(event) {
        event.preventDefault()

        _enter.replaceWith(_register.container)
    })

    enterLogin.addEventListener('click', function(event) {
        event.preventDefault()
    
        _enter.replaceWith(_login.container)
    })  

    return _enter
}


Enter.prototype = Object.create(Interactive.prototype)
Enter.prototype.constructor = Enter
