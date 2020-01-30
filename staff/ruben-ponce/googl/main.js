var users = [];

var login = createLogin('login', function(username, password) { 
    if (users.length > 0) {
        for ( var i = 0; i < users.length; i++) {
            var user = users[i];
            if (user.username.includes(username) && password === user.password) {
                _googl.toggle();
                _yahoo.toggle();
                _bing.toggle()
                _ecosia.toggle();
                login.toggle();
                return;
            }
        }
        alert("incorrect username/pass");
    } else {
        alert('please register first');
    }
}, function () {
    login.toggle();
    finishRegister.toggle();
});

var buttonContent = document.querySelector('div.buttonContent');
var buttonSignin = document.querySelector('.buttonContent__signin');
var registerTemplate = document.querySelector('.registerTemplate');



buttonSignin.addEventListener('click', function (event) {
    event.preventDefault();
    buttonContent.classList.toggle('buttonContent--hide');
    document.getElementsByClassName("registerTemplate")[0].classList.remove('registerTemplate--hide');
});

var finishRegister = registerUser('registerTemplate', function(name, surname, username, password) {
    try {
        register(name, surname, username, password);

        finishRegister.toggle();
        login.toggle();
    } catch (error) {
        alert(error.message + ' ' + IT);
    }
    // if (user.name && user.surname && user.username && user.password) {
    //     document.querySelector('.registerTemplate').classList.toggle('registerTemplate--hide');
    //     document.querySelector('.buttonContent').classList.remove('buttonContent--hide');
    // } else {
    //     alert("You have to fill all shields");
    // }
}, function () {
    finishRegister.toggle();
    login.toggle();
});

var home = document.querySelector('h1');

home.addEventListener('click', function () {
    window.location.href = 'index.html'
});


var _googl = createSearch('.search', function (query) {
    googl(query, function (results) {
        createResults('.results', results);
    });
});

var _yahoo = createSearch('.search2', function (query) {
    yahoo(query, function (results) {
        createResults('.results2', results);
    });
});

var _bing = createSearch('.search3', function (query) {
    bing(query, function (results) {
        createResults('.results3', results);
    });
});

var _ecosia = createSearch('.search4', function (query) {
    ecosia(query, function (results) {
        createResults('.results4', results);
    });
});