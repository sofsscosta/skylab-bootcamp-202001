'use strict';

function App(props) {
    var app = document.createElement('main');
    app.innerHTML = '<h1>' + props.title + '</h1>';

    var _login = Login({
        onSubmit: function (username, password) {
            try {
                authenticate(username, password);
        
                _login.replaceWith(_googl);
                app.append(_ecosia);
                app.append(_bing);
                app.append(_yahoo);
                
            } catch (error) {
                alert(error.message);
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
            alert(error.message);
        }
    }, 
        onToLogin: function (){
            _register.replaceWith(_login);
        }
    });
    
    app.append(_login);
    
    var _googl = Search({
        title: 'Googl',
        
        onSubmit: function(query) {
            googl(query, function(results) {
                if (results instanceof Error) return alert(results.message);
    
                var _results = Results({ results: results });
    
                if(!_googlResults) {
                    app.insertBefore(_googlResults = _results, _ecosia);
                } else {
                    _googlResults.replaceWith(_results);
                    _googlResults = _results;
                }
            });
        }
    });
    
    var _googlResults;
    
    var _ecosia = Search({
        title: 'Ecosia',
        
        onSubmit: function(query) {
            ecosia(query, function(results) {
                if (results instanceof Error) return alert(results.message);
    
                var _results = Results({ results: results });
    
                if(!_ecosiaResults) {
                    app.insertBefore(_ecosiaResults = _results, _bing);
                } else {
                    _ecosiaResults.replaceWith(_results);
                    _ecosiaResults = _results;
                }
            });
        }
    });
    
    var _ecosiaResults;
    
    var _bing = Search({
        title: 'Bing',
        
        onSubmit: function(query) {
            bing(query, function(results) {
                if (results instanceof Error) return alert(results.message);
    
                var _results = Results({ results: results });
    
                if(!_bingResults) {
                    app.insertBefore(_bingResults = _results, _yahoo);
                } else {
                    _bingResults.replaceWith(_results);
                    _bingResults = _results;
                }
            });
        }
    });
    
    var _bingResults;
    
    var _yahoo = Search({
        title: 'Yahoo',
        
        onSubmit: function(query) {
            yahoo(query, function(results) {
                if (results instanceof Error) return alert(results.message);
    
                var _results = Results({ results: results });
    
                if(!_yahooResults) {
                    app.append(_yahooResults = _results);
                } else {
                    _yahooResults.replaceWith(_results);
                    _yahooResults = _results;
                }
            });
        }
    });
    
    var _yahooResults;

    return app;
};
