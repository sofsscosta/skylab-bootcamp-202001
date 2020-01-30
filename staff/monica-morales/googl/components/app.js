'use strict';

var IT = '🎈🤡';

function App(props){
    var app = document.createElement('main');

    var logo = document.createElement('figure');
    logo.classList.add('log');
    


    logo.innerHTML = '<img src = "https://www.google.es/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png">'
    

    
    // img.innerHTML =  "<img src = 'https://www.google.es/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'>"

    var _login = Login( {
        onSubmit: function (username, password) {
            try {
                authenticate(username, password);
    
                _login.replaceWith(_googl);
            } catch (error) {
                alert(error.message + ' ' + IT);
            }
        },
        onToRegister: function () {
           _login.replaceWith(_register);
        }
    });
    var _register = Register({
        onSubmit: function (name, surname, username, password) {
            try {
                register(name, surname, username, password);
    
                _register.replaceWith(_login);
            } catch (error) {
                alert(error.message + ' ' + IT);
            }
        },
        onToLogin: function () {
            _register.replaceWith(_login);
        }
    });

    app.append(_login);

    var _googl = Search({
        onSubmit: function (query) {
            googl(query, function (results) {
                if (results instanceof Error) return alert(results.message + ' ' + IT);
                
                var_results = Results({results : results});
                if(!_googlResults)
                    app.append(_googlResults = results);
                else {
                    _googlResults.replaceWith(_results);
                    _googlResults = _results;
                }
            });
        }
    });

    var _googlResults;
    return app;
}             