"use strict"

function App (props) {
	var app = document.createElement('main');
	
	app.innerHTML = props.title;

	var _login = Login({
		onSubmit : function (username, password){
			try {
				authenticate (username, password);

				_login.replaceWith(_googl)
                app.append(_ecosia)
                app.append(_bing)
                app.append(_yahoo);
				
				// var nav = document.querySelector('.nav');
				// nav.classList.toggle("nav--hide")
			} catch(error) {
				alert (error.message)
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
                alert(error.message + ':P');
            }
        },
        onToLogin: function () {
            _register.replaceWith(_login);
        }
    });


	app.append(_login);


	// createNavbar()


	var _googl = Search({
		title: 'Googl',

		onSubmit: function (query) {
            googl(query, function (results) {
                if (results instanceof Error) return alert(results.message + ' ' + IT);

                var _results = Results({ results: results });

                if (!_googlResults)
                    app.append(_googlResults = _results);
                else {
                    _googlResults.replaceWith(_results);

                    _googlResults = _results;
                }
            });
		}
	});

	var _googlResults;




    var _ecosia = Search({
        title: 'Ecosia',

        onSubmit: function (query) {
            googl(query, function (results) {
                if (results instanceof Error) return alert(results.message + ' ' + IT);

                var _results = Results({ results: results });

                if (!_ecosiaResults)
                    app.append(_ecosiaResults = _results);
                else {
                    _ecosiaResults.replaceWith(_results);

                    _ecosiaResults = _results;
                }
            });
        }
    });

    var _ecosiaResults;
    


    var _bing = Search({
        title: 'Googl',

        onSubmit: function (query) {
            googl(query, function (results) {
                if (results instanceof Error) return alert(results.message + ' ' + IT);

                var _results = Results({ results: results });

                if (!_bingResults)
                    app.append(_bingResults = _results);
                else {
                    _bingResults.replaceWith(_results);

                    _bingResults = _results;
                }
            });
        }
    });

    var _bingResults;


    var _yahoo = Search({
        title: 'Googl',

        onSubmit: function (query) {
            googl(query, function (results) {
                if (results instanceof Error) return alert(results.message + ' ' + IT);

                var _results = Results({ results: results });

                if (!_yahooResults)
                    app.append(_yahooResults = _results);
                else {
                    _yahooResults.replaceWith(_results);

                    _yahooResults = _results;
                }
            });
        }
    });

    var _bingResults;

	
	
	return app;
}
