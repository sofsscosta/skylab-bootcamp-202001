function createLogin(selector, callback) {
    var login = document.querySelector(selector);

    login.addEventListener('submit', function(event) {
        event.preventDefault();

        var username = this.username.value;
        var password = this.password.value;

        callback(username, password);
    });

    return login;
}