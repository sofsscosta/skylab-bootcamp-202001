'use strict';

function createSearch(idClass, callback) {
    var search = document.querySelector('.' + idClass);

    search.addEventListener('submit', function (event) {
        event.preventDefault();

        var query = this.query.value;

        callback(query);
    });

    search.toggle = function() {
        this.classList.toggle('search--hide');
    };

    return search;
}

function createResults(selector, results) {
    var list = document.querySelector(selector);

    list.innerHTML = '';

    results.forEach(function (result) {
        var item = document.createElement('li');

        var title = document.createElement('h3');
        title.innerText = result.title;

        var link = document.createElement('a');
        link.target = '_blank';
        link.href = result.link;

        link.append(title);

        item.append(link);

        if (result.rating) {
            var rating = document.createElement('span');
            rating.innerText = result.rating;

            item.append(rating);
        }

        var description = document.createElement('p');
        description.innerText = result.description;

        item.append(description);

        list.append(item);
    });
}

function createLogin(idClass, onSubmit, onToRegister) {
    var login = document.querySelector('.' + idClass);

    login.addEventListener('submit', function(event) {
        event.preventDefault();

        var username = this.username.value;
        var password = this.password.value;

        onSubmit(username, password);
    });

    login.toggle = function() {
        this.classList.toggle('login--hide');
    };

    var register = login.querySelector('a');

    register.addEventListener('click', function(event) {
        event.preventDefault();

        onToRegister();
    });

    return login;
}

function createRegister(idClass, onSubmit, onToLogin) {
    var register = document.querySelector('.' + idClass);

    register.addEventListener('submit', function(event) {
        event.preventDefault();

        var name = this.name.value;
        var surname = this.surname.value;
        var username = this.username.value;
        var password = this.password.value;

        onSubmit(name, surname, username, password);
    });

    register.toggle = function() {
        this.classList.toggle('register--hide');
    };

    var login = register.querySelector('a');

    login.addEventListener('click', function(event) {
        event.preventDefault();

        onToLogin();
    });

    return register;
}