function createLogin(selector, props) { // callback, onToRegister) {
    if(typeof selector !== 'string') throw new TypeError(selector + 'is not a string')
    if(typeof props !== 'object') throw new TypeError(props + 'is not an Object')

    var login = document.querySelector(selector);

    login.addEventListener('submit', function(event) {
        event.preventDefault();

        var username = this.username.value;
        var password = this.password.value;

        props.onSubmit(username, password);
    });

    var register = document.querySelector('.register-link')

    register.addEventListener('click', function(event) {
        event.preventDefault()
        
        props.onToRegister()
    })

    return login;
}