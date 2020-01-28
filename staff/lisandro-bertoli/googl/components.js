function createSearch(selector, callback) {
    var search = document.querySelector(selector);

    // search.onsubmit = function (event) {
    search.addEventListener('submit', function (event) {
        event.preventDefault();

        var query = this.query.value;

        callback(query);
        // };
    });

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

function createLogin(selector, callback) {
    var login = document.querySelector(selector);

    login.addEventListener('submit', function (event) {
        event.preventDefault();

        var username = this.username.value;
        var password = this.password.value;

        callback(username, password);
    });

    return login;
}

function createRegister(selector, callback) {
    var register = document.querySelector(selector);

    register.addEventListener('submit', function (event) {
        event.preventDefault();

        var username = this.username.value;
        var password = this.password.value;
        var name = this.name.value;
        var surname = this.surname.value;

        callback(name, surname, username, password);
    });

    return register;
}

function toggleForm(linkSelector, formSelector, hideFormSelector) {
    var form = document.querySelector(formSelector);
    var link = document.querySelector(linkSelector);
    var hideForm = document.querySelector(hideFormSelector);

    link.addEventListener('click', function (event) {
        event.preventDefault();
        form.reset();
        hideForm.reset();
        hideForm.classList.toggle(hideFormSelector.substring(1) + '--hide');
        form.classList.toggle(formSelector.substring(1) + '--hide');

    });

    return link;
}