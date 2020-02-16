function createRegister(selector, props) {
    if (typeof selector !== 'string') throw new TypeError(selector + ' is not a string')
    if (typeof props !== 'object') throw new TypeError(props + ' is not an object')

    var register = document.querySelector(selector);

    register.addEventListener('submit', function(event) {
        event.preventDefault();

        var name = this.name.value;
        var surname = this.surname.value;
        var username = this.username.value;
        var password = this.password.value;

        props.onSubmit(name, surname, username, password);

    });

        var login = document.querySelector('.login-link')

        login.addEventListener('click', function(event) {
            event.preventDefault()
            
            props.onToLogin()
        })

    return register;
}