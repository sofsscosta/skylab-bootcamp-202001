function createLogin(idClass, props) {
    var login = document.querySelector('.' + idClass);

    login.addEventListener('submit', function(event) {
        event.preventDefault();

        var username = this.username.value;
        var password = this.password.value;

        props.onSubmit(username, password);
    });

    login.toggle = function() {
        this.classList.toggle('login--hide');
    };

    // var register = login.querySelector('a');

    // register.addEventListener('click', function(event) {
    //     event.preventDefault();

    //onToRegister();
    // });

    return login;
}