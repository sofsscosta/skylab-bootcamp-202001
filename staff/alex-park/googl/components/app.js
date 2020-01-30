'use strict';

var _login = Login({
    onSubmit: function (username, password) {
        try {
            authenticate(username, password);
    
            _login.replaceWith(_googl);
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
                app.append(_googlResults = _results);
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

            if(!_googlResults) {
                app.append(_googlResults = _results);
            } else {
                _googlResults.replaceWith(_results);
                _googlResults = _results;
            }
        });
    }
});

var _googlResults;

// var _ecosia = createSearch('form.ecosia', {
    
//     onSubmit: function(query) {
//         ecosia(query, function(results) {
//             if (results instanceof Error) return alert(results.message);

//             createResults('ul.ecosia', results);
//         });
//     }
// });

// var _bing = createSearch('form.bing', {
    
//     onSubmit: function(query) {
//         bing(query, function(results) {
//             if (results instanceof Error) return alert(results.message);

//             createResults('ul.bing', results);
//         });
//     }
// });

// var _yahoo = createSearch('form.yahoo', {
    
//     onSubmit: function(query) {
//         yahoo(query, function(results) {
//             if (results instanceof Error) return alert(results.message);

//             createResults('ul.yahoo', results);
//         });
//     }
// });


// var search = createSearch('.search', function (query) {
//     googl(query, function (results) {
//         createResults('.results', results);
//     });
// });

// createSearch('.search-2', function (query) {
//     googl(query, function (results) {
//         createResults('.results-2', results);
//     });
// });

// createSearch('.search-3', function (query) {
//     googl(query, function (results) {
//         createResults('.results-3', results);
//     });
// });

// var login = createLogin('.login', function(username, password) { 
//     if (users.length > 0) {
//         for ( var i = 0; i < users.length; i++) {
//             var user = users[i];
//             if(user.username.includes(username) && password === user.password) {
//                 document.querySelector('.search').classList.remove('search--hide');
//                 login.classList.toggle('login--hide');
//                 return;
//             } else {
//                 alert("Error: incorrect user/pass, please try again.");
//                 document.querySelector('.buttonContent').classList.remove('buttonContent--hide');
//                 document.querySelector('.login').classList.toggle('login--hide');

//             }
//         }

//     } else {
//         alert('ERROR: Please register first.')
//         document.querySelector('.buttonContent').classList.remove('buttonContent--hide');
//         document.querySelector('.login').classList.toggle('login--hide');
//     }
// });

// var buttonContent = document.querySelector('div.buttonContent');
// var buttonLogin = document.querySelector('.buttonContent__login');
// var buttonSignin = document.querySelector('.buttonContent__signin');
// var registerTemplate = document.querySelector('.registerTemplate');

// buttonLogin.addEventListener('click', function () {
//     buttonContent.classList.toggle('buttonContent--hide');
//     document.getElementsByClassName("login")[0].classList.remove('login--hide');
// })

// buttonSignin.addEventListener('click', function () {
//     buttonContent.classList.toggle('buttonContent--hide');
//     document.getElementsByClassName("registerTemplate")[0].classList.remove('registerTemplate--hide');
// })

// var finishRegister = registerUser('.registerTemplate', function(user) {
//     if (user.name && user.surname && user.username && user.password) {
//         document.querySelector('.registerTemplate').classList.toggle('registerTemplate--hide');
//         document.querySelector('.buttonContent').classList.remove('buttonContent--hide');
//     }
// })

// document.querySelector('h1').addEventListener('click',function(){
//     location.reload();
// });

// document.querySelector('h1').addEventListener('click',gohome());
