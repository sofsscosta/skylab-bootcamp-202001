'use strict';

var IT = '🎈🤡';

function _app(props) {
    var app = document.createElement('main');

    app.innerHTML = '<h1>' + props.title + '</h1>';
    
    var _login = createLogin({
        title: 'login',
        onSubmit: function (username, password) {
            var user = users.find(function (user) {
                return username === user.username;
            });
            if (user && user.password === password) {
                login.toggle();
                _search.classList.toggle('search--hide');
                return 0;
            }

        },
        onToRegister: function () {
            _login.replaceWith(_register);

        }
    });
    var _register = createRegister({
        title: 'register',
        onSubmit: function (name, surName, userName, password) {
            var person = {
                name: name,
                userName: userName,
                surName: surName,
                password: password
            }
            debugger
            if (person.name.length > 0 && person.surName.length > 0 && person.userName.length > 0 && person.password.length > 0) {
                users.push(person);
                _register.toggle();
                login.toggle();
            } else {
                alert('Completa todos los campos!')
            };

        },
        onToLogin: function () {
            _register.replaceWith(_register);
        }
    });

    var _search = createSearch({
        title: 'google',
        onSubmit: function (query) {
            googl(query, function (results) {
                if (results instanceof Error) {
                    alert('network Error')
                } else {
                    createResults('.list', results);
                }
            });
        }
    });
}










